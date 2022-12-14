# PhysioNB
## Contents
- [Introduction](#introduction)  
- [Technologies](#technologies)  
- [Setup](#setup)  
- [Screenshots](#screenshots)  
- [Contact](#contact)  

## Introduction
PhysioNB is a notes talking software for musculoskeletal physiotherapists. It allows physiotherapist to create an account, add their patients and add notes for each patient. It allows physiotherapists to move away from a paper-based notes keeping system.
Authentication and encryption of user passwords is done using json web token and bcrypt.

## Technologies
### This project was created with:  
  - Node v16.15.1  
  - bcryptjs: 2.4.3,  
  - express: 4.18.0",  
  - jsonwebtoken: 8.5.1",  
  - mongoose: 6.3.1"  
The frontend was created with:  
  * React: 18.2.0  
  
## Setup
### To run this project, install it locally using npm:  
#### Create a .env file in the backend folder: backend/src/config/dev.env  
e.g.  
PHYSIOAPP_MONGODB_URI = "mongodb://localhost:27017/physionoter"  
PORT = 8081  
PHYSIOAPP_JWT_SECRET = "Somekindofsecretpasswordithink"    
  
#### Create a .env file in the frontend folder: frontend/src/.env  
e.g.  
REACT_APP_PHYSIOAPP_BACKEND = 'http://127.0.0.1:8081'  


        
        $ cd backend  
        $ npm install  
        $ npm run dev  
        
        
  
          
        $ cd frontend  
        $ npm install  
        $ npm start </p>
          

## Screenshots  
![Loginpage](./screenshots/screenshot1)  
## Contact  
  Denis Finn  
  finn.denis@gmail.com  
  
