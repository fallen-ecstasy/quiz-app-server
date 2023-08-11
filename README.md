# Quiz Application - Server

Welcome to the server repository of the MERN Quiz Application! This repository contains the backend code for the quiz application, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This backend server handles user authentication, quiz management, and more.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- Docker (optional for containerization)
- PM2
- AWS account for deployment (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-quiz-server.git
   cd mern-quiz-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and provide the necessary environment variables. You can use `.env.example` as a template.

4. Start the server:
  
  - Development Server:
    ```bash
     npm run dev
    ```
    
  - Production Server:
    Create a ```ecosystem.config.js``` file and use given below code:
    ```javascript
    module.exports = {
    apps : [
        {
          name: "Quiz-App-API",
          script: "dist/server.js",
          watch: true,
          env: {
              "PORT": 3000,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 4000,
              "NODE_ENV": "production",
          }
        }
    ]
    }
    ```
    Then run following commands:
    ```bash
    npm install -g pm2
    ```
    ```bash
    pm2 start ecosystem.config.js --env production
    ```

    To Stop:
    ```bash
    pm2 stop Quiz-App-API
    ```


## Usage

The server provides API endpoints for user authentication, quiz management, user profiles, analytics, and more. Please refer to the [API Documentation](#api-documentation) for detailed information on available routes and their usage.

## API Documentation

Detailed API documentation can be found [here](/api-docs). You can also explore the API endpoints using tools like Postman.

## Features

- User authentication using Google OAuth 2.0
- Quiz creation, management, and categorization
- Quiz taking with timers and detailed feedback
- User profiles and customization
- Review and rating system for quizzes
- Progress tracking and analytics
- Achievements and badges for users
- Containerization using Docker
- Kubernetes deployment for scalability
- Node.js cluster for improved performance

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

Please ensure your code follows the existing code style and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).
