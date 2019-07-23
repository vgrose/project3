import os

import pandas as pd
import numpy as np

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, request


app = Flask(__name__)


@app.route("/")
def index():
    # """Return the homepage."""
    return render_template("index.html")


@app.route("/google.html")
def news():
    return render_template("google.html")


@app.route("/sidebar.html")
def nav():
    return render_template("sidebar.html")

if __name__ == "__main__":
    app.run()
# port = int(os.environ.get("PORT", 5000))
# app.run(host='0.0.0.0', port=port)