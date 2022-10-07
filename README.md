# Placement Cell

## Description
An Interface for the Placement cell team in an institute.

## Requirement
1. NodeJS
2. MongoDB


## Dependencies Used 
1. npm install express  
2. npm install mongoose (used for mongoDB database )
3. npm install passport (used for passport )
4. npm install nodemon  
5. npm install passport-local (passport strategy used for authorization: Local Strategy)
6. npm install ejs (used for view engine ejs )
7. npm install express-ejs-layouts (used for layout)
8. npm install express-session (used for create session )
9. npm install connect-mongo 
10. npm install json2csv (it used for convert json data to CSV data )
11. npm install axios(for the fetching API of github jobs)


## Setup and Execution
1. Clone this repository.
2. Install above given dependencies.
3. For Naive testing, (base url - http://localhost:8000
   - Start the server by 'npm start' and test using postman services

## Routes Used
```
1. /GET    '/'
  -This route is used for Homepage.
  
2. /GET    '/users/sign-up'
  -This route is used for Sign Up Page

3. /get    '/users/sign-in'
  -This route is used for Sign In Page.
  
4. /POST   '/users/create'
  -This route is used for Creating a new Employee(user).
  -This is the form for creating the Employee(user) and automatically fetched in Sign Up page.

5. /POST   '/users/create-session'
  -This route is used for Signing In the registered Employee(user) using creating the session.
  -This is the form for signing in to the Employee(user) automatically fetched in Sign In page. 
  
6. /GET    '/users/sign-out'
  -This route is used for signing out from the session means destroy the session estaiblished at the time of signing in.
  
7. /GET    '/students/fetch'
  -This route is used for rendering the page of Student and fetch the table.
  
8. /POST   '/students/create-student'
  -This route is used for creating the new student for interview.
  
9. /GET   '/interviews/fetch-interview'
  -This route is get request route which is used to fetch the interview(company name and profile table) table and schedule interview for the selected company.
  
10. /POST  '/interviews/create-interview'
  -This route is post request route which is used for creating the company who wants to take interview and the profile.
  
11. /GET   '/scheduling/schedule-interview/:id'
  -This route is get request route for the fetching the scheduling the interview for the student and id is interview company id.
  
12. /POST  '/scheduling/adding-student/:id'
  -This route is post route for the adding the student to the selected company.

13. /POST  '/scheduling/updating-result/:id'
  -This route is post route for updating the result after student get interviewed.
  
14. /GET   '/csv/download'
  -This route is used for exporting the results.csv file
  
15. /GET   '/github'
  -This route is used for fetching the data from the github jobs get api.
```


