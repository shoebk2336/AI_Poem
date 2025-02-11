import mysql from "mysql2";

// Manually enter your Railway MySQL credentials
const db = mysql.createConnection({
  host: "mysql.railway.internal", // Replace with your Railway MySQL host
  user: "root", // Replace with your Railway MySQL username
  password: "yVJKWIjQeDkjHbAynTLjloWNTKrblhGi", // Replace with your Railway MySQL password
  database: "railway", // Replace with your Railway database name
  port: 3306, // Railway default MySQL port
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
    return;
  }
  console.log("✅ Connected to Railway MySQL Database!");
});

// SQL Queries to Create Tables
const sql = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS poems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
`;

db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("✅ Database and tables created successfully!");
  db.end();
});
