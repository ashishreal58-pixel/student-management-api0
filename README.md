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
