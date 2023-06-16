## Phone Authentication Application
This application is a simple phone authentication system built with React and Express. It allows users to sign up, log in, and verify their phone numbers. Once logged in, users can access the dashboard and sign out.

## Features
## User Registration: 
Users can create a new account by providing their email, password, username, and phone number.
## User Login: 
Registered users can log in using their email and password.
## Phone Number Verification: 
After successful login, users are prompted to verify their phone number by entering a verification code.
## Dashboard: 
Once the phone number is verified, users can access their dashboard, which displays a personalized greeting and a sign-out button.
## Technologies
```
Node Js
Express
React
Jwt
```
## Getting Started
Clone the repository to your local machine.
Open a terminal and navigate to the project directory.
Install the dependencies for the api and client by running the following commands in separate terminals:
# Install frontend dependencies
```
cd client
npm install
```

# Install backend dependencies
```
cd api
npm/yarn install
```
## Usage
client
Open a terminal and navigate to the backend directory.
Start the backend server: 
npm start.
The server will start running at http://localhost:4000.
client
Open a new terminal and navigate to the frontend directory.
Start the React development server: npm start.
The application will be accessible at http://localhost:.
## Application Structure
The application consists of the following components:

```
Login: Renders the login form and handles user login functionality.
Signup: Renders the signup form and handles user registration functionality.
Dashboard: Displays the user's dashboard and allows them to sign out.
PhoneVerify: Verifies the user's phone number using a verification code.
The frontend uses React Router for navigation, and the backend is built with Express.
```

## API Endpoints
The backend exposes the following API endpoints:
```
POST /api/login: Handles user login. Expects an email and password in the request body. If successful, it returns a success message and the user's username.
POST /api/register: Handles user registration. Expects an email, password, username, and phone number in the request body. If successful, it returns a success message.
POST /api/verification: Handles phone number verification. Expects a verification code in the request body. If the code matches the generated code, it returns a success message; otherwise, it returns an error message.
Database
The application currently uses an in-memory array (users) to store registered users. The data is not persistent and will be lost upon server restart.
```

## Authentication Flow
## User Registration:

The user fills in the registration form with their email, password, username, and phone number.
The frontend sends a POST request to /api/register with the user's information.
The backend validates the input, checks if the email or phone number is already registered, and adds the user to the users array if successful.
The frontend receives the response and displays a success message or an error message, if applicable.
## User Login:

The user enters their email and password in the login form.
The frontend sends a POST request to /api/login with the user's credentials.
The backend checks if the email and password match a registered user's data in the users array.
If the login is successful, the backend generates a verification code and sends it to the user's phone number using the Novu API (or any SMS service of your choice).
The frontend receives the response and redirects the user to the verification page.
Phone Number Verification:

The user enters the verification code received on their phone.
The frontend sends a POST request to /api/verification with the verification code.
The backend compares the received code with the generated code.
If the codes match, the backend updates the user's verification status to true.
The frontend receives the response and redirects the user to the dashboard.
## Dashboard:

The user is redirected to the dashboard, where they are greeted with a personalized message.
The user can sign out by clicking the sign-out button, which clears the session and redirects them to the login page.
## Contributing
Contributions are welcome! If you find any issues or would like to enhance the application, feel free to open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
This application was developed as a learning exercise and may not have production-level security features. It is recommended to use it for educational purposes only.