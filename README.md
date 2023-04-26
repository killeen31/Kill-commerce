# Kill-commerce
This is an e-commerce back end application that helps businesses handle large databases
 
- Table of contents 
-Description 
-Installation 
-Usage 
-What I learned 
-Contributing
-Credits
-License 

# User Story 
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

# Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


# Decsription 
This is a backend application that uses a database that is directed towards e-commerce that allows the user to view products, categories, and tags. It also allows you to add, delete, and make updates to all three. 


# Installation 
This app is installed by visiting my GitHub page and cloning my repository "Trackployee" 
This app was built with:
Node.js 16.18.1
Javascript
Express.js
Sequilize
Insomnia
Dotenv
Inquirer 8.2.4
mysql2 3.2.3

* Open the repo using vscode 

# Usage
1) Repository: Open documentation run 'npm i' and update '.env'.
2)Create database: use the schema.sql file in the db folder with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.
3)Run 'npm run seed' to seed the database with test data. Then, run 'npm start' or 'nodemon' to start the server and sync the Sequelize models to the MySQL database.
4)Generate a development database with test data, use the schema and seed commands.
5)Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.


# What I learned 
What I leanred while making this application was how to better use databases and api routes to create and change personal databases using insomnia.  

# Credits 
This app can be credited to Jack Killeen with some help from the TAs and one tutoring session

GitHub - killeen31 


# License 
This application uses an MIT license 


<img width="1090" alt="Screenshot 2023-04-25 at 10 12 37 PM" src="https://user-images.githubusercontent.com/119546445/234448719-5b5b2526-7333-42b1-ae78-1b011fb54310.png">






