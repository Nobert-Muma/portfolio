from models import db
from models.message import Message
from flask import Flask, request
from flask_cors import CORS
from flask_migrate import Migrate

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///messages.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
migrate=Migrate(app, db)
db.init_app(app)
CORS(app)

@app.route('/messages', methods=['POST'])
def add_message():
    name=request.get_json()['name']
    email=request.get_json()['email']
    message=request.get_json()['message']
    return Message.add_message(name, email, message)

if __name__=='__main__':
    app.run(port=5555, debug=True)