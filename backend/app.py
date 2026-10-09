import os
import stripe  # type: ignore[import-not-found]
from flask import Flask, redirect, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
stripe.api_key = os.getenv('STRIPE_API')

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
  session = stripe.checkout.Session.create(
    mode="payment",
    ui_mode="hosted_page",
    success_url="{{SUCCESS_URL}}",
    cancel_url="{{CANCEL_URL}}",
    line_items=[{"price": "{{PRICE_ID}}", "quantity": 1}],
    billing_address_collection="auto",
    phone_number_collection={"enabled": True},
    allow_promotion_codes=False,
    submit_type="auto",
    integration_identifier="hosted_web_0001",
    saved_payment_method_options={"payment_method_save": "enabled"},
    origin_context="web",
  )
  return redirect(session.url, code=303)

@app.route('/prices', methods=['GET'])
def prices():
  prices_all = stripe.Price.list(limit=10)
  return jsonify(prices_all.to_dict())
  
