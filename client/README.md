# Authentication Practice with JWT Tokens and Protected Routes

This practice project combines the functionality of a To-Do List application with robust user authentication using JWT (JSON Web Tokens) and protected routes. Managing tasks is a fundamental aspect of productivity, and this project ensures that users can securely create and access their to-do lists.

## Technologies Used:

- React
- JWT (JSON Web Tokens)
- React Router
- Node.js 
- Express.js (for creating RESTful APIs)
- MongoDB 

## Features:

1. **User Registration and Authentication:**
   - Users can register for an account, providing a personalized space to manage their to-do lists.
   - Secure authentication using JWT tokens ensures that user data is protected.

2. **Login and Token Generation:**
   - Registered users can log in to access their personalized to-do lists.
   - The server generates a JWT token upon successful login, allowing seamless and secure communication between the client and server.

3. **Protected Routes:**
   - To-Do List-related routes are protected, ensuring that only authenticated users can create, edit, or delete tasks.
   - Unauthorized users attempting to access these routes are redirected to the login page.

4. **Task Management:**
   - Users can create new tasks and delete them.
   - Task data is securely stored in the database, associated with the authenticated user.

5. **Auth-Protected Routes:**
   - Specialized protected routes allow authenticated users to access and manage their personalized to-do lists.
   - Unauthenticated users are redirected to the login page, promoting a secure environment.

6. **Token Expiration and Refresh:**
   - JWT token expiration is implemented to enhance security.
   - A token refresh mechanism ensures a seamless user experience without the need for frequent logins.

## Getting Started:

1. Clone the repository
2. Install dependencies for both the frontend and backend.
3. Set up a MongoDB database for user and task storage.
4. Configure the backend server to handle authentication and task-related operations.
5. Run the application locally: `npm start` for both frontend and backend.

## Usage:

1. Register a new account to create a personalized to-do list.
2. Log in using the registered credentials to access and manage your tasks.
3. Explore the secure and protected routes for seamless task management.

## Resources:

- [JWT.io](https://jwt.io/): Official website for JSON Web Tokens.
- [React Router Documentation](https://reactrouter.com/): Learn about routing in React applications.
- [Express.js Documentation](https://expressjs.com/): Explore building APIs with Express.

## Note:

This project is a practical and educational exploration of combining authentication features with a To-Do List application. Always follow best practices for security when developing production-level applications.
