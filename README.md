# Digit_recognizer
The Digit Recognizer allow you to draw a number on an HTML canvas, and a Neural Network attempts to predict the outcome.

![Screenshot (390)](https://user-images.githubusercontent.com/68558063/109596251-ddd5df00-7b3b-11eb-8a7e-ea9ed7727fd3.png)

Check it out here.
https://digit-recognizer-conv.herokuapp.com/

The Neural Network was trained on a portion of the MNIST dataset with 98.7% accuracy on the test set using a Convolutional Neural Network after data augmentation.

# Issues
Since the dataset it was trained on is not too large, the model faces difficulty in recognizing certain numbers more than the others. Notably, the number '6' seems to difficult for the neural network to correctly classify.
