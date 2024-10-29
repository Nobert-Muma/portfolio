from models import db
from models.message import Message
from flask import Flask, request
from flask_cors import CORS
from flask_migrate import Migrate
import os
app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://sokokenyadb_o4rb_user:We9DLAAfcu52h1yJVSSanMgVyRTqPM1x@dpg-csbjoodds78s73b8rskg-a.oregon-postgres.render.com/sokokenyadb_o4rb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
migrate=Migrate(app, db)
db.init_app(app)
CORS(app, resources={
    r"/*": {
        "origins": ["https://nobertmuma.onrender.com"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "Accept"]
    }
})


@app.route('/', methods=['GET'])
def index():
    return "Welcome to my website"

@app.route('/messages', methods=['POST'])
def add_message():
    name=request.get_json()['name']
    email=request.get_json()['email']
    message=request.get_json()['message']
    result=Message.add_message(name, email, message)
    return {"status": "success", "message": result}, 201

if __name__=='__main__':
    port=int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)