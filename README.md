# CRUD Assignment

This is a simple CRUD(Create, Read, Update, Dekete) application built using MERN Stack i.e. Node, Express, MongoDB(Mongoose) in the backend(API Server) and React, React-Router, Redux, Redux-Thunk in the front end.

## Installing Packages & Running Project

Follow these commands exactly to run this project.

```sh
npm install
cd client
npm install
cd ..
npm run dev
```

**You need to run "npm install" in _client directory as well as global project directory_**

## Scripts Available

```sh
"scripts": {
	"start": "node app.js",
	"client": "npm start --prefix client",
	"server": "nodemon app.js",
	"dev": "concurrently \"npm run server\" \"npm run client\""
}

```

```sh
npm start
```
1. **npm start :** Runs the backend of app in the development mode at http://localhost:5000  
```sh
npm run client
```
2. **npm run client :** Runs the frontend of app in the development mode at http://localhost:3000  

```sh
npm run server
```
3. **npm run server :** Runs the backend of app in the development mode by nodemon at http://localhost:5000

## Running Project in Development Mode

```sh
npm run dev
```

Runs the app in the development mode, which run both backend and front server consecutively.

# Author
- D H R U V &nbsp; P R A J A P A T I

# Thank You!