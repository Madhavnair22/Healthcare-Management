
# Healthcare Management Using Mern Stack

DOCT-CARE is a comprehensive healthcare management system developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This platform enables patients to book appointments with doctors based on their specialization, experience, rating, and consultation fees.


## Key Features
Patient and Doctor Authentication: Separate signup and login pages for both patients and doctors to ensure secure access.

Doctor Search and Sorting: Patients can search for doctors by specialization and sort them by experience, rating, and consultation fees.

Appointment Booking: Patients can book appointments with their chosen doctors and view their bookings on the My Bookings page.

Booking Management: Patients can cancel appointments if the doctor is unavailable on the chosen date. Doctors can accept or decline appointment requests, with patients receiving notifications of the doctor's decision on their My Bookings page.

User-friendly Interface: Includes a landing page, welcome page, about us page, and a sign-out page for seamless navigation.

Data Persistence: All user data, bookings, and interactions are securely stored in the database.
## Installation
Clone the repository

my-app   
npm init -y        
npm install   


## License
This project is licensed under the ISC License.
## Run the application:
Frontend : npm start  
Backend : node server.js
## TechStack
Front-End: React.js, React-Router-Dom, Use State.
React.js: JavaScript library for building user interfaces, ensuring a responsive and dynamic user experience.

Back-End: Node.js, Express.js.
Node.js: JavaScript runtime for executing server-side code.
Express.js: Web application framework for Node.js to build the backend of the application.

Database: MongoDB, Mongoose. 
MongoDB: NoSQL database for storing user data, appointments, and other relevant information.

Integration: Axios, Body-Parser, Cors.
## Additional Dependencies
Nodemon: Tool for automatically restarting the server during development.  
Ant Design (antd): UI framework for React.  
Axios: Promise-based HTTP client for the browser and Node.js.  
Body-parser: Middleware for parsing incoming request bodies.  
CORS: Middleware for enabling Cross-Origin Resource Sharing.  
React Bootstrap: Bootstrap components for React.   
React Checkmark: Component for rendering checkmarks in React.  
React DOM: Package for working with the DOM in React.  
React Icons: Popular icons for React.   
React Router DOM: Declarative routing for React.   
React Scripts: Scripts and configuration used by Create React App.   
React Scroll: Component for smooth scrolling in React.   
UseState: Hook for managing state in React.   
## Usage
Patients: Sign up or log in to search for doctors, book appointments, and manage your bookings.  

Doctors: Sign up or log in to manage your profile and respond to appointment requests.
## Set up environment variables

Create a .env file in the root directory or config and add the following:

module.exports={
    url:"mongodb://127.0.0.1:27017/user12"
}