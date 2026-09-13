import os, json
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import String, Integer, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///golden-arrow.db"

db = SQLAlchemy(app)

class ProductImages(db.Model):
    __tablename__ = "product_images"

    id: Mapped[int] = mapped_column(primary_key=True)
    # Need to add Images here. ---WILL DO LATER---

class Product(db.Model):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String, unique=True, index=True)
    name: Mapped[str] = mapped_column(String)
    category:Mapped[str] = mapped_column(String)
    price_cents: Mapped[int] = mapped_column(Integer)

    # Need to add Images here. ---WILL DO LATER---

    #Returns slug, name, category, price as objects
    def to_dict(self):
        return{
            "slug": self.slug,
            "name" : self.name,
            "category": self.category,
            "price": self.price_cents / 100,
            # IMAGES HERE 
            #"images": [img.url for img in self.images],
        }
    

@app.route("/checkout", methods=["POST"])
def home():
    return jsonify({"message": "Checkout endpoint reached"}), 200

# Routes to "/products" Returns JSON
@app.route("/products", methods=["GET"])
def products():
    items = db.session.query(Product).all()
    return jsonify([p.to_dict() for p in items])


with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)