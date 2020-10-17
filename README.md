# orm_e_commerce_backend
build the back end for an e-commerce site: a working Express.js API and configured to use Sequelize to interact with a MySQL database.


## Description

🔍 A mysql database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv.
  
💻 Below shows the functionality of the application and can be found within my google drive:


<iframe src="https://drive.google.com/file/d/19FP8Rfz9Ur_mWZFUr8PHtJcAxI7Ry8q6/preview" width="640" height="480"></iframe>

## User Story
  
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
  
## Acceptance Criteria
  
``` 
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
```
  
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💾   
  
`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`
  
## Usage
💻   
  
Run the following command at the root of your project and answer the prompted questions:

`mysql -uroot -p`

Enter PW when prompted

`source ./db/schema.sql`

`quit`

`npm run seed`
  
`npm start`

## Testing
✏️

No testing is in place

## Contributing
:octocat: [Jenifer Queen](https://github.com/queen-stack)
Xandromus

## Questions
✉️ Contact me with any questions: [email](mailto:queen_jenf@yahoo.com) , [GitHub](https://github.com/queen-stack)<br/>
