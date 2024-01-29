## Demo
  <p>
    <br />
    Tested on Huawei mate 20
    <br />
    <br />
    <a href="https://www.bilibili.com/video/BV1fK41187Mi/">View Demo</a>
    <br />    
    <br />
  </p>



## Getting Started

### Frontend Setup
React Native， version 0.72

  ```sh
cd Frontend
npm install
npm run android
  ```


### Backend Setup
Express.js

create a .env file in the Server folder and add your MONGODB_URL
  ```sh
cd Server
npm install
npm start
  ```


When you want to connect your frontend with your own backend, remember to change the http request domain to your own backend. You need to configure two place.
1. Frontend/src/utils/request.js: change the domain url in line 11 to your own url
2. Frontend/src/screens/Home.js change the domain url in line 36