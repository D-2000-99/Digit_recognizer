import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template, make_response
from joblib import load
import tensorflow as tf
import matplotlib.pyplot as plt

app = Flask(__name__)
model1 = tf.keras.models.load_model('digit_recog_cnn.h5')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    features = request.get_json()['arr']
    final_features = np.array(features)
    print(final_features.shape)
    prediction = model1.predict(final_features.reshape(-1,28,28,1))
    output = prediction[0]
    print("===>Output:", output)
    sum=0
    for i in output:
        sum=sum+i

    if sum>0:
        print("Yesh")
        output = np.where(output>0)[0][0]
        res = make_response(jsonify(f'${output}'), 200)
    if sum==0:
        print("Nien")
        res = make_response(jsonify(f'ERROR'), 200)
    return res
if __name__ == "__main__":
    app.run(debug=True)