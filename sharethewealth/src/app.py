from flask import *
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


@app.route("/")
def welcome():
    return "Testing Flask"

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)