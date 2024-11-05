# User Authentication with JWT

This Node.js project demonstrates user authentication and authorization using Bearer tokens.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with MongoDB connection URI and JWT secret.
4. Run `node app.js` to start the server.

## API Endpoints

- **POST /api/auth/register** - Register a new user.
- **POST /api/auth/login** - Login and receive a JWT.
- **GET /api/auth/user** - Get user information (protected).

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
