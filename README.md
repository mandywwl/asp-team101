### SAGE App

Welcome to SAGE, a mental health companion app designed to support and enhance your mental well-being.

## Features

- **Daily Check-ins**: Track your mood and emotions daily.
- **Guided Meditations**: Access a library of guided meditations to help you relax and focus.
- **Personalized Insights**: Receive insights and tips based on your check-ins and activities.
- **Journaling**: Maintain a private journal to reflect on your thoughts and feelings.
- **Resource Library**: Explore articles, videos, and other resources on mental health topics.
- **Emergency Contacts**: Quickly access emergency contacts and hotlines when needed.

## Installation & Running (For Dev Collaboration)

1. Make sure Node.js is installed on your machine:
   https://nodejs.org/en/download/package-manager

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sage-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sage-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the front end application:
   ```bash
   npm run dev
   ```
5. Open second terminal, change to server folder:
   ```bash
   cd server
   ```
6. Start server:
   ```bash
   npm start
   ```
7. Go to localhost:3100

## To Run Server (Note that this on reads and copies commands from MySQL to your machine. Data is NOT tranferrable between different machines):
1. Install and set up MySQL on your machine: https://dev.mysql.com/doc/mysql-getting-started/en/
2. After connecting to the mysql prompt, create a database: 
   ```bash
   CREATE DATABASE team101;
   ``` 
3. Then create a user on localhost as per the .env file: 
   ```bash
   CREATE USER 'suizz'@'localhost' IDENTIFIED BY 'new_password';
   ```
4. Give permissions to the user to manage the database:
   ```bash
   GRANT ALL PRIVILEGES ON team101.* TO 'suizz'@'localhost' WITH GRANT OPTION;
   ```
5. Run ```FLUSH PRIVILEGES;``` and then you can quit from the mysql prompt using ```exit```.
6. Make sure that server/.env file exists and that it has team101 set for DB_NAME, password set for DB_PASS and suizz set for DB_USER

## Contributing

Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the . See the LICENSE file for details.

## Contact

For any questions or feedback, please contact us at

---

Thank you for using SAGE! We hope it helps you on your journey to better mental health.