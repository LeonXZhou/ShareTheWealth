from flask import *
import os 
from dotenv import load_dotenv
import psycopg2
import requests

import urllib.parse as up

load_dotenv()
up.uses_netloc.append("postgres")

secret = os.getenv('url')

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

@app.route("/authenticate/<int:id>")
def addCookieSimple(id):
    resp = make_response()
    resp.set_cookie('cookie', str(id))
    return resp

# @app.route("authenticate-<string:email>-<string:password>")
# def addCookie(email, password):
#     cur = conn.cursor()
#     cur.execute("""
#     select * from users where email = %(str1)s and password = %(str2)s;
#     """, 
#     {'str1':email, 'str2':password}
#     )
    
#     obj1 = cur.fetchall()
#     if(len(obj1) > 0):
#         obj = obj1[0][0]
#         resp = make_response()
#         resp.set_cookie('cookie', str(obj))
#         return resp
#     else:
#         return "None..."

@app.route("/getcookie")
def setCookie():
    return request.cookies.get("cookie")


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
    INSERT INTO users (first_name, last_name, email, password)
    VALUES
    ('Jim', 'Smith', 'jim@email.com', 'abc123'),
    ('Steve', 'Johnson', 'steve@email.com', 'password'),
    ('Amanda', 'Wilson', 'a.wilson@email.com', '11111');
    """)

    cur.execute("""
    INSERT INTO activities (name, occasion_id, total_cost)
    VALUES
    ('Activity 1A', 1, 50.00),
    ('Activity 1B', 1, 75.00),
    ('Activity 2A', 2, 17500.00),
    ('Activity 2B', 2, 30000.00),
    ('Activity 3A', 3, 0.02),
    ('Activity 3B', 3, 0.99);
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
    (4, 2, 10000.00),
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
    cur.execute(""" DROP TABLE IF EXISTS occasion CASCADE; """)
    cur.execute("""CREATE TABLE occasion(
                        id SERIAL PRIMARY KEY NOT NULL,
                        date DATE NOT NULL,
                        name VARCHAR(255) NOT NULL
                        );""")

    cur.execute(""" DROP TABLE IF EXISTS users CASCADE;
                    CREATE TABLE users(
                        id SERIAL PRIMARY KEY NOT NULL,
                        first_name VARCHAR(255) NOT NULL,
                        last_name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NUll
                        );""")

    cur.execute(""" DROP TABLE IF EXISTS activities CASCADE;
                    CREATE TABLE activities(
                        id SERIAL PRIMARY KEY NOT NULL,
                        name VARCHAR(255) NOT NULL,
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
                        contribution_amount MONEY NOT NULL,
                        CONSTRAINT user_activity UNIQUE (activities_id,user_id)
                        );""")

    conn.commit()
    return "Created tables in ERD"

@app.route("/api/user/<int:user_id>/occasion")
def getOccasionsFromId(user_id):
    cur = conn.cursor()
    cur.execute("""select occasion.id, occasion.name, occasion.date  from occasion join participants on occasion.id = occasion_id where user_id = %s;""", (user_id,))
    return(jsonify(cur.fetchall()))

@app.route("/api/occasion/<int:occasion_id>/activities")
def getActivitiesFromOccasion(occasion_id):
    cur = conn.cursor()
    cur.execute("""select activities.id, name, total_cost, SUM(contribution_amount) from activities 
        FULL JOIN event_contribution on activities_id = activities.id
        where occasion_id = %s
        GROUP BY activities.id,name,total_cost;""", (occasion_id,))
    return(jsonify(cur.fetchall()))

@app.route("/api/occasion/<int:occasion_id>")
def getOccasionById(occasion_id):
    cur = conn.cursor()
    cur.execute("""select * from occasion where occasion.id = %s;""", (occasion_id,))
    return(jsonify(cur.fetchall()))

@app.route("/api/post/occasion", methods=['POST'])
def postOccasion():
    cur = conn.cursor()
   
    if not request.json or not 'date' in request.json or not 'name' in request.json:
        abort(400)
    
   
   

    cur.execute("""
    INSERT INTO occasion (date, name)
    VALUES
    (%(str1)s, %(str2)s)
    RETURNING *;
    """, 
    {'str1':request.json['date'], 'str2': request.json['name']})

    conn.commit()
    return (jsonify(cur.fetchall()))

@app.route("/api/activity/<int:activities_id>/user/<int:user_id>", methods=['POST'])
def postContribution(activities_id, user_id,):
    cur = conn.cursor()
    
    if not request.json or not 'contribution_amount' in request.json:
        abort(400)
    
    cur.execute("""
    INSERT INTO event_contribution (activities_id, user_id, contribution_amount)
    VALUES
    (%(str1)s, %(str2)s, %(str3)s)
    ON CONFLICT ON CONSTRAINT user_activity DO UPDATE 
    SET contribution_amount= %(str3)s;
    """,
    {'str1':activities_id, 'str2':user_id, 'str3':request.json['contribution_amount']})

    conn.commit()
    return "Post request successful"


@app.route("/api/occasion/<int:occasion_id>/activity", methods=['POST'])
def postActivity(occasion_id):
    cur = conn.cursor()
    if not request.json or not 'name' in request.json or not 'total_cost' in request.json:
        abort(400)
    
    cur.execute("""
    INSERT INTO activities (name, occasion_id, total_cost)
    VALUES
    (%(str0)s, %(str1)s, %(str2)s);
    """,
    {'str0':request.json['name'], 'str1':occasion_id, 'str2':request.json['total_cost']})

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