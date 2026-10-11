import os, stripe
from flask import Flask
from extensions import db, migrate
import models # noqa: F401
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv('DB_URL')
CORS(app)
stripe.api_key = os.getenv('STRIPE_API')
db.init_app(app)
migrate.init_app(app, db)