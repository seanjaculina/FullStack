from flask import Flask
from flask_cors import CORS # to handle cross origin resource sharing between 3000 port for react and 5000 for flask API

app = Flask(__name__)
CORS(app)

@app.route('/') #route decorator from app() from flask
def hello():
    return {"msg": "hello, world"}
