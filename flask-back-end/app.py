from flask import *
import os 
from dotenv import load_dotenv
import psycopg2

import urllib.parse as up

load_dotenv()
up.uses_netloc.append("postgres")

secret = os.getenv('url')
print(secret)
url = up.urlparse(secret)


conn = psycopg2.connect(database=url.path[1:],
user = url.username,
password=url.password,
host=url.hostname,
port=url.port
)

 


app = Flask(__name__)


test = [
    {
        'name': 'Test 1',
        'id': 1
    }, 
    {
        'name': 'Test 2',
        'id': 2
    }
]

@app.route("/fillDataTables")
def popTables():
    cur = conn.cursor()

    cur.execute("""
    INSERT INTO occasion (date, name)
    VALUES
    ('01-02-2020', 'Event 1'),
    ('02-04-2021', 'Event 2'),
    ('03-05-2023', 'Event 3');
    """)

    cur.execute("""
    INSERT INTO users (first_name, last_name, email)
    VALUES
    ('Jim', 'Smith', 'jim@email.com'),
    ('Steve', 'Johnson', 'steve@email.com'),
    ('Amanda', 'Wilson', 'a.wilson@email.com');
    """)

    cur.execute("""
    INSERT INTO activities (occasion_id, total_cost)
    VALUES
    (1, 50.00),
    (1, 75.00),
    (2, 17500.00),
    (2, 30000.00),
    (3, 0.02),
    (3, 0.99);
    """)

    cur.execute("""
    INSERT INTO participants (user_id, occasion_id)
    VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3),
    (3, 3),
    (3, 1);
    """)

    cur.execute("""
    INSERT INTO event_contribution (activities_id, user_id, contribution_amount)
    VALUES
    (1, 1, 25.00),
    (2, 1, 30.00),
    (3, 1, 2500.00),
    (4, 1, 15000.00),
    (3, 2, 15000.00),
    (4, 2, 15000.00),
    (5, 2, 0.01),
    (6, 2, 0.90),
    (5, 3, 0.01),
    (6, 3, 0.09),
    (1, 3, 25.00),
    (2, 3, 45.00);
    """)
    conn.commit()
    return "Populated data tables"

@app.route("/createDataTables")
def createNeededTables():
    cur = conn.cursor()
    cur.execute(""" DROP TABLE IF EXISTS occasion CASCADE;
                    CREATE TABLE occasion(
                        id SERIAL PRIMARY KEY NOT NULL,
                        date DATE NOT NULL,
                        name VARCHAR(255) NOT NULL
                        );""")

    cur.execute(""" DROP TABLE IF EXISTS users CASCADE;
                    CREATE TABLE users(
                        id SERIAL PRIMARY KEY NOT NULL,
                        first_name VARCHAR(255) NOT NULL,
                        last_name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL
                        );""")

    cur.execute(""" DROP TABLE IF EXISTS activities CASCADE;
                    CREATE TABLE activities(
                        id SERIAL PRIMARY KEY NOT NULL,
                        occasion_id INT REFERENCES occasion(id),
                        total_cost MONEY NOT NULL
                        );""")

    cur.execute(""" DROP TABLE IF EXISTS participants CASCADE;
                    CREATE TABLE participants(
                        id SERIAL PRIMARY KEY NOT NULL,
                        user_id INT REFERENCES users(id),
                        occasion_id INT REFERENCES occasion(id)
                        );""")

    cur.execute(""" DROP TABLE IF EXISTS event_contribution CASCADE;
                    CREATE TABLE event_contribution(
                        id SERIAL PRIMARY KEY NOT NULL,
                        activities_id INT REFERENCES activities(id),
                        user_id INT REFERENCES users(id),
                        contribution_amount MONEY NOT NULL
                        );""")

    conn.commit()
    return "Created tables in ERD"

@app.route("/api/user/<int:user_id>/occasion")
def getOccasionsFromId(user_id):
    cur = conn.cursor()
    cur.execute("""select * from occasion join participants on occasion.id = occasion_id where user_id = %s;""", (user_id,))
    return(jsonify(cur.fetchall()))

@app.route("/api/occasion/<int:occasion_id>/activities")
def getActivitiesFromOccasion(occasion_id):
    cur = conn.cursor()
    cur.execute("""select * from activities where occasion_id = %s;""", (occasion_id,))
    return(jsonify(cur.fetchall()))

@app.route("/api/post/occasion", methods=['POST'])
def postOccasion():
    print("asdf")
    cur = conn.cursor()
   
    if not request.json or not 'date' in request.json or not 'name' in request.json:
        abort(400)
    
   
   

    cur.execute("""
    INSERT INTO occasion (date, name)
    VALUES
    (%(str1)s, %(str2)s);
    """, 
    {'str1':request.json['date'], 'str2': request.json['name']})

    conn.commit()
    return "Post request successful"

    

    


@app.route("/<int:task_id>", methods=['GET'])
def get_test(task_id):
    task = [task for task in test if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

@app.route("/", methods=["POST"])
def create_test():
    print(request.json['name'])
  
    if not request.json or not 'name' in request.json:
        abort(400)
    task = {
        'name': request.json['name'],
        'id': test[-1]['id'] + 1
    }
    test.append(task)
    return jsonify({'test': task}), 201

@app.route("/removeLast")
def remLast():
    cur = conn.cursor()
    cur.execute(""" DELETE FROM users WHERE ID=(SELECT MAX(id) FROM users)""")
    conn.commit()
    return "Deleted last row from table"

@app.route("/addTest-<string:st1>-<string:st2>-<string:st3>-<string:st4>")
def welcome(st1, st2, st3, st4):
    cur = conn.cursor()
    cur.execute("""
     INSERT INTO users (first_name, last_name, email, password)
     VALUES (%(str1)s, %(str2)s, %(str3)s, %(str4)s);
     """,
     {'str1': st1, 'str2': st2, 'str3' : st3, 'str4' : st4})

    conn.commit()
    return "Added to database"

@app.route("/users")
def getAllU():
    cur = conn.cursor()
    cur.execute("select * from users;")
    return jsonify(cur.fetchall())

@app.route("/occ")
def getAllO():
    cur = conn.cursor()
    cur.execute("select * from occasion;")
    return jsonify(cur.fetchall())

@app.route("/activities")
def getAllA():
    cur = conn.cursor()
    cur.execute("select * from activities;")
    return jsonify(cur.fetchall())

@app.route("/participants")
def getAllP():
    cur = conn.cursor()
    cur.execute("select * from participants;")
    return jsonify(cur.fetchall())

@app.route("/evcon")
def getAllE():
    cur = conn.cursor()
    cur.execute("select * from event_contribution;")
    return jsonify(cur.fetchall())

@app.route("/")
def temp():
    return "Homepage"
    

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)