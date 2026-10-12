from extensions import db
class Product(db.Model):
    __tablename__="products"
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(75), unique=True, nullable=False)
    name = db.Column(db.String(75), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(75), nullable=False)
    images = db.Column(db.ARRAY(db.String(255)), nullable=False, default=list)

    def to_dict(self):
        return {
            "slug" : self.slug,
            "name" : self.name,
            "price" : self.price,
            "category" : self.category,
            "images" : self.images,
        }