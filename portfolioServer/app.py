from models import db
from models.message import Message
from flask import Flask, request
# from flask_cors import CORS
from flask_migrate import Migrate
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Get Vercel Postgres credentials
POSTGRES_URL = os.getenv('POSTGRES_URL')
POSTGRES_USER = os.getenv('POSTGRES_USER')
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
POSTGRES_HOST = os.getenv('POSTGRES_HOST')
POSTGRES_DATABASE = os.getenv('POSTGRES_DATABASE', 'verceldb')
POSTGRES_URL_NON_POOLING=os.getenv('POSTGRES_URL_NON_POOLING')
POSTGRES_PRISMA_URL=os.getenv('POSTGRES_PRISMA_URL')

# Construct database URL
if POSTGRES_URL:
    DATABASE_URL = POSTGRES_URL
else:
    DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DATABASE}"
    print(f"Database URL: {DATABASE_URL.replace(POSTGRES_PASSWORD, '****')}")

# Configure Flask app
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

# Initialize database
migrate = Migrate(app, db)
db.init_app(app)

)

@app.route('/', methods=['GET'])
def index():
    try:
        # Test database connection
        db.session.execute('SELECT 1')
        return {"message": "Welcome to my website. Database connection successful!"}
    except Exception as e:
        return {"message": "Welcome to my website. Database connection failed!", "error": str(e)}, 500

@app.route('/messages', methods=['POST'])
def add_message():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        if not all([name, email, message]):
            return {"status": "error", "message": "Missing required fields"}, 400
        
        result = Message.add_message(name, email, message)
        return {"status": "success", "message": "Message sent successfully"}, 201
    
    except ValueError as e:
        return {"status": "error", "message": str(e)}, 400
    except Exception as e:
        return {"status": "error", "message": f"Server error: {str(e)}"}, 500

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)