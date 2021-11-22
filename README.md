# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


1. Project
In the project directory, you can run:

npm install
npm start

for information the command 'nmp start' will open an internet window ont he following port: http://localhost:3000


2. Backend project
Backend repository: sportsee/API

This repo contains all the source code to run the micro API for the sports analytics dashboard.

2.1 Prerequisites
Yarn
to install yarn : enter command in the terminal "yarn"
to launch API: enter command in the terminal "yarn dev"
warning, actually API is config on port 3001

axios
to install axios : enter command in the terminal "npm install axios"
add axios with react : enter command in the terminal "yarn add axios"

2.2. Endpoints
2.2.1 Possible endpoints
This project includes four endpoints that you will be able to use:

http://localhost:3001/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3001/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3001/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3001/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

2.2.2 Examples of queries
http://localhost:3001/user/12/performance - Retrieves the performance of the user with id 12
http://localhost:3001/user/18 - Retrieves user 18's main information.


3. Update documentation
Use Jsdoc to comment the code to keep the documentation up to date.


4. Libreries
Axios - Free API resquest library.
Recharts - Library for manipulating documents based on data.
React-router-dom - Collection of navigational components that compose declaratively with your application.