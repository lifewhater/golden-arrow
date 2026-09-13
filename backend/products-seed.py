from app import Product, db, app
import json

with open('products.json') as file:
    data = json.load(file)

with app.app_context():
    # Delete the data in the table if already exists
    try:
        num_rows_deleted = db.session.query(Product).delete()
        db.session.commit()
        print(f"Deleted {num_rows_deleted} rows")
    
    except Exception as e:
        db.session.rollback()
        print(f"Error deleting rows: {e}")
    
    # Accesing data inside products.json
    for entry in data:
        p = Product(
            slug = entry["slug"],
            name = entry["name"],
            category = entry["category"],
            price_cents=int(entry["price"]),
        )
            # NEED IMAGES
        db.session.add(p)

    # adding to the table
    try:
        db.session.commit()
        print("Data stored")
    except Exception as e:
        db.session.rollback()
        print(f"Error importing data: {e}")

with app.app_context():
    db.create_all()