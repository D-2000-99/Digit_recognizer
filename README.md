# Digit recognizer

https://digit-recognizer-conv-eu.herokuapp.com/
<p>The Digit Recognizer allow you to draw a number on an HTML canvas, and a Neural Network attempts to predict the outcome.</p>

### Please note: 
Since the slug size is a bit on the higher side due to dependencies, The application might take a few minutes to load as heroku slows down boot times of larger slugs on the free tier.

![Screenshot (390)](https://user-images.githubusercontent.com/68558063/109596251-ddd5df00-7b3b-11eb-8a7e-ea9ed7727fd3.png)

The Neural Network was trained on a portion of the MNIST dataset with 98.7% accuracy on the test set using a Convolutional Neural Network after data augmentation.

## Issues
Since the dataset it was trained on is not too large, the model faces difficulty in recognizing certain numbers more than the others. Notably, the number '6' seems to difficult for the neural network to correctly classify.
