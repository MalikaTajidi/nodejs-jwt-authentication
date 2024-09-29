# Node.js JWT Authentication API

This project is a Node.js API that implements authentication using JSON Web Tokens (JWT). It utilizes MongoDB for the database and bcrypt.js for password hashing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MalikaTajidi/nodejs-jwt-authentication.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-project-name
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables:
   ```
   TOKEN_SECRET=your_secret_key
   MONGO_URI=your_mongodb_connection_string
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## Endpoints

### Register a User

- **URL**: `/api/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  - Success: `{ "user": "user_id" }`
  - Error: `{ "error": "Validation error" }`

### Login a User

- **URL**: `/api/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  - Success: `{ "auth-token": "your_jwt_token" }`
  - Error: `{ "error": "Invalid password" }`

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt.js
- jsonwebtoken
- Joi (for validation)

## Contributing

Feel free to fork the repository, make changes, and submit a pull request.

