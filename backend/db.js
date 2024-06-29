const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "grievance_redressal"
});

pool.on("error", (error, client) => {
  console.log(error);
});

async function initDatabase() {
  const queries = [
    `CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      password TEXT NOT NULL,
      type TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS block (
      block_id SERIAL PRIMARY KEY,
      block_name TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS student (
      student_id SERIAL PRIMARY KEY,
      block_id INT,
      usn TEXT,
      room TEXT,
      FOREIGN KEY (student_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (block_id) REFERENCES block(block_id) ON DELETE CASCADE
    );`,
    `CREATE TABLE IF NOT EXISTS warden (
      warden_id SERIAL PRIMARY KEY,
      block_id INT,
      FOREIGN KEY (warden_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (block_id) REFERENCES block(block_id) ON DELETE CASCADE
    );`,
    `CREATE TABLE IF NOT EXISTS category (
      category_id SERIAL PRIMARY KEY,
      category_name TEXT
    );`,
    `CREATE TABLE IF NOT EXISTS workers (
      worker_id SERIAL PRIMARY KEY,
      category_id INT,
      FOREIGN KEY (worker_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE
    );`,
    `CREATE TABLE IF NOT EXISTS complaint (
      id SERIAL PRIMARY KEY,
      name TEXT,
      block_id INT,
      category_id INT,
      student_id INT,
      assigned_worker_id INT,
      warden_id INT,
      description TEXT,
      room TEXT,
      is_completed BOOLEAN,
      created_at TIMESTAMP,
      assigned_at TIMESTAMP,
      FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE,
      FOREIGN KEY (block_id) REFERENCES block(block_id) ON DELETE CASCADE,
      FOREIGN KEY (assigned_worker_id) REFERENCES workers(worker_id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE,
      FOREIGN KEY (warden_id) REFERENCES warden(warden_id) ON DELETE CASCADE
    );`
  ];

  for (const query of queries) {
    await pool.query(query);
  }
}

module.exports = {
  pool,
  initDatabase,
};
