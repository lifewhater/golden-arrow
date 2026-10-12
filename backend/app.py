import os, stripe
from flask import Flask, jsonify, abort
from extensions import db, migrate
import models
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv('DB_URL')
CORS(app)
stripe.api_key = os.getenv('STRIPE_API')
db.init_app(app)
migrate.init_app(app, db)

@app.route('/api/product/<string:slug>', methods=['GET'])
def product(slug):
    product = db.session.scalars(db.select(models.Product).filter_by(slug=slug))
    if product is None:
        abort(404)
    return jsonify(product.to_dict())