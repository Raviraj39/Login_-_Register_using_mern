
# User Authentication and Management System

This project is a user authentication and management system built with React for the frontend and Node.js for the backend. It allows users to register, login, and view a protected page displaying their information in a static table format.

## Features

- User registration with name, date of birth, email, and password.
- User login with JWT token authentication.
- Local storage usage to persist user authentication state.
- Protected route to access a static table displaying user information.

## Technologies Used

- Frontend:
  - React
  - React Router for routing
  - React Bootstrap for UI components
  - Axios for HTTP requests

- Backend:
  - Node.js
  - Express.js for handling HTTP requests
  - MongoDB for data storage
  - Mongoose for MongoDB object modeling

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Raviraj39/Login_Register_using_mern
```



2. Install dependencies for frontend and backend:

```bash
cd front
npm install

cd server
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Define the following variables:
     - `MONGODB_URI`: MongoDB connection URI
     - `JWT_SECRET`: Secret key for JWT token generation

4. Run the backend server:

```bash
cd server
nodemon index.js
```

5. Run the frontend server:

```bash
cd front
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Register a new user by filling out the registration form with your name, date of birth, email, and password.

2. Login with your registered email and password.

3. After successful login, you will be redirected to the protected page displaying your information in a static table format.

## Deployment

- The frontend is deployed on [Netlify](https://www.netlify.com/) 
- The backend is deployed on [Render](https://www.render.com/)

## Credits

This project was created by Raviraj Bujawade. 

---
