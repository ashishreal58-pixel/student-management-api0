Lab Assignment 2 – Student Management REST API
Web Dev III (Node.js & Express Backend)
Unit–2 | In-Class Lab

A RESTful API built using Node.js and Express.js to manage student records via CRUD operations, custom middleware, modular routing, and standard HTTP status code error handling.

📌 Project Overview
This project implements a backend REST API without external database engines (e.g. MongoDB/MySQL) or ODM/ORMs (e.g. Mongoose). Student records are maintained in-memory using JavaScript objects and arrays.

Key Features
RESTful API Design: Full CRUD functionality adhering to REST principles.
Modular Routing: Organized endpoint handling via express.Router().
Custom Middleware: Request logger that tracks HTTP Method, URL, and Timestamp for every incoming request.
Robust Error Handling: Standard HTTP status codes (200, 201, 400, 404, 500) with meaningful JSON error responses.
In-Memory Storage: Data persists in runtime memory during the server lifecycle.
📁 Project Structure
student-management-rest-api/
│
├── data/
│   └── students.js          # In-memory array containing student data
├── middleware/
│   └── logger.js            # Custom logging middleware (Method, URL, Time)
├── routes/
│   └── studentRoutes.js     # Modular Express routes for student CRUD
├── app.js                   # Application entry point & server configuration
├── package.json             # Project dependencies and metadata
├── package-lock.json        # Locked dependency versions
├── .gitignore               # Files & directories excluded from version control
└── README.md                # Project documentation
🛠️ Technology Stack
Runtime Environment: Node.js
Web Framework: Express.js
API Testing: Postman / cURL
🚀 Getting Started
Prerequisites
Make sure you have Node.js (v18+) and npm installed on your system:

node -v
npm -v
1. Installation
Clone or navigate to the project directory and install the required dependencies:

npm install
2. Starting the Server
Run the application using Node:

node app.js
The server will start running on:

http://localhost:3000
📡 API Endpoints Reference
Method	Endpoint	Description	Success Code	Error Codes
GET	/students	Get all student records	200 OK	500
GET	/students/:id	Get single student by studentId	200 OK	404, 500
POST	/students	Add a new student record	201 Created	400, 500
PUT	/students/:id	Update an existing student	200 OK	404, 500
DELETE	/students/:id	Delete a student record	200 OK	404, 500
📝 Request & Response Examples
1. Get All Students
Request: GET http://localhost:3000/students
Response (200 OK):
{
  "message": "All students",
  "students": [
    {
      "studentId": "STU001",
      "name": "Aarav Sharma",
      "age": 20,
      "gender": "Male",
      "course": "CSE",
      "semester": 4,
      "city": "Delhi",
      "email": "aarav@example.com",
      "marks": {
        "math": 88,
        "dbms": 76,
        "web": 92
      },
      "attendance": 91,
      "feesPaid": true,
      "skills": ["JavaScript", "MongoDB", "React"],
      "isActive": true
    }
  ]
}
2. Get Student by ID
Request: GET http://localhost:3000/students/STU001
Response (200 OK):
{
  "studentId": "STU001",
  "name": "Aarav Sharma",
  "age": 20,
  "gender": "Male",
  "course": "CSE",
  "semester": 4,
  "city": "Delhi",
  "email": "aarav@example.com",
  "marks": {
    "math": 88,
    "dbms": 76,
    "web": 92
  },
  "attendance": 91,
  "feesPaid": true,
  "skills": ["JavaScript", "MongoDB", "React"],
  "isActive": true
}
Error Response (404 Not Found if ID does not exist):
{
  "message": "Student not found"
}
3. Create a New Student
Request: POST http://localhost:3000/students
Headers: Content-Type: application/json
Body:
{
  "studentId": "STU016",
  "name": "Rahul Verma",
  "age": 21,
  "gender": "Male",
  "course": "BCA",
  "semester": 3,
  "city": "Noida",
  "email": "rahul.verma@example.com",
  "marks": {
    "math": 85,
    "dbms": 80,
    "web": 90
  },
  "attendance": 88,
  "feesPaid": true,
  "skills": ["Python", "JavaScript"],
  "isActive": true
}
Response (201 Created):
{
  "message": "Student created successfully",
  "student": {
    "studentId": "STU016",
    "name": "Rahul Verma",
    "age": 21,
    "gender": "Male",
    "course": "BCA",
    "semester": 3,
    "city": "Noida",
    "email": "rahul.verma@example.com",
    "marks": {
      "math": 85,
      "dbms": 80,
      "web": 90
    },
    "attendance": 88,
    "feesPaid": true,
    "skills": ["Python", "JavaScript"],
    "isActive": true
  }
}
Validation Errors (400 Bad Request):
{
  "message": "studentId, name, age and course are required"
}
or

{
  "message": "Student ID already exists"
}
4. Update Student Information
Request: PUT http://localhost:3000/students/STU016
Headers: Content-Type: application/json
Body:
{
  "name": "Rahul V. Sharma",
  "city": "Delhi",
  "semester": 4
}
Response (200 OK):
{
  "message": "Student updated successfully",
  "student": {
    "studentId": "STU016",
    "name": "Rahul V. Sharma",
    "age": 21,
    "gender": "Male",
    "course": "BCA",
    "semester": 4,
    "city": "Delhi",
    "email": "rahul.verma@example.com",
    "marks": {
      "math": 85,
      "dbms": 80,
      "web": 90
    },
    "attendance": 88,
    "feesPaid": true,
    "skills": ["Python", "JavaScript"],
    "isActive": true
  }
}
Error Response (404 Not Found if ID does not exist):
{
  "message": "Student not found"
}
5. Delete a Student
Request: DELETE http://localhost:3000/students/STU016
Response (200 OK):
{
  "message": "Student deleted successfully",
  "student": {
    "studentId": "STU016",
    "name": "Rahul V. Sharma",
    ...
  }
}
Error Response (404 Not Found if ID does not exist):
{
  "message": "Student not found"
}
⚡ Middleware & Error Handling
logger Middleware: Every incoming request is logged to the console with the format:

<Date/Time> - <HTTP_METHOD> <URL>
Example:

26/9/2026, 6:50:39 pm - GET /students
404 Route Not Found: Any route not matching defined routes will return:

{
  "message": "Route not found"
}
500 Global Error Handler: Catches unexpected errors in request processing:

{
  "message": "Something went wrong"
}
🧪 Testing with Postman
Open Postman.
Set the HTTP request method (GET, POST, PUT, DELETE).
Enter http://localhost:3000/students (or with :id).
For POST and PUT, go to the Body tab, select raw, and set the format to JSON.
Click Send and inspect the returned status codes and response bodies.
