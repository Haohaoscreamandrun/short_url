# URL Shortener

This application allows user to produce a shorter URL when input one. Input same URL will get a same output. Short URL will only redirect when server is on. 

## Getting started

### Prerequisites

* express@4.18.2
* express-handlebars@7.0.7
* mongoose@7.1.1
* dotenv@16.0.3

### Installing

1. Please confirm the installation of node.js and npm
2. Clone the project to local environment
3. Access the cloned folder by terminal, and type:
```
npm install
```
4. Set MONGODB_URI env. Get your MongoDB connection string first, and type below command in terminal:
```
export MONGODB_URI="Your Connection String Here"
```
5. After finishing downloading, type:
```
npm run start
```
6. Below message showing on terminal means the app start running:
```
App is running on localhost:3000
mongodb connected!
``` 
7. Open your browser and go to:[http://localhost:3000](http://localhost:3000)

8. In case you're done using it:
```
ctrl + c
```

## Built with

* [Node.js](https://nodejs.org/zh-tw/download) - runtime
* [Express](https://expressjs.com/zh-tw/) - framework
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - view engine
* [MongoDB](https://www.mongodb.com/) - document database
* [mongoose](https://mongoosejs.com/) - ODM
