## Demo
  <p>
    <br />
    A full stack social media mobile app for course COMP4342 projects.
    <br />
    <br />
    Tested on Huawei mate 20: 
    <a href="https://www.bilibili.com/video/BV1fK41187Mi/">View Demo</a>
    <br />    
    <br />
  </p>



## Getting Started

### Frontend Setup
React Native，version 0.72


Core packages including:

Redux: for front-end state control  
Axios: for http request between front-end and back-end



  ```sh
cd Frontend
npm install
npm run android
  ```


### Backend Setup
Express.js + MongoDB

  ```sh
cd Server
npm install
npm start
  ```


You need to create a .env file in the Server folder and add your MONGODB_URL to connect to your database

If you want to connect your frontend with your own backend, you need to change the http request address to your own backend. You need to configure two places.
1. Frontend/src/utils/request.js: change the domain url in line 11 to your own url
2. Frontend/src/screens/Home.js change the domain url in line 36



