# NLP Process

A simple web application to provide you with analysis of the text you insert.

## Installation

Make sure to run "npm i" to install all the node packages needed for the project to run smoothly.

## How to bootstrap it

For starting the project on a localhost server that is run by Webpack, type in terminal

Make sure you're in the root directory then open the terminal and type:

> npm run build-dev

To create a *Dist* folder that contains the whole distribution of your project , type in terminal
> npm run build-prod

Make sure you're in the right directory before running the scripts

----

## Init the server

make sure you're in *server* folder of the project, and the *dist* folder must be created before starting the server


To run your project on a node server, type in your terminal
> node index.js


---

# The Project's Archeticture

In the **src** folder you'll find:

> Client folder
- js :  for all  client side JavaScript files and functionalities
- styles: for all the style files
- views: contains only one HTML file
- **index.js** the entry file that combines all the logic and modules for Webpack process

> Server folder

- index.js : the main file to start the server 

