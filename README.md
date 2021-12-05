# 🔢Digit recognizer

https://digit-recognizer-conv-eu.herokuapp.com/
<p>The Digit Recognizer allow you to draw a number on an HTML canvas, and a Neural Network attempts to predict the outcome.</p>

<hr>

### 🛑 PLEASE NOTE:

The app is hosted on a free Heroku tier and you are likely to encounter delays in the output. Please wait around a minute before refreshing the page. This is purely the result of Heroku limiting bandwidth for apps hosted on the free tier and the app runs instantaneously on a local machine or on paid instances like Elastic Beanstalk.
<hr>

![Screenshot (390)](https://user-images.githubusercontent.com/68558063/109596251-ddd5df00-7b3b-11eb-8a7e-ea9ed7727fd3.png)

The Neural Network was trained on a portion of the MNIST dataset with 98.7% accuracy on the test set using a Convolutional Neural Network after data augmentation.

## Issues
Since the dataset it was trained on is not too large, the model faces difficulty in recognizing certain numbers more than the others. Notably, the number '6' seems to difficult for the neural network to correctly classify.
