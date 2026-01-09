import Database from 'better-sqlite3';

const db = process.env.DB_PATH ? new Database(process.env.DB_PATH) : new Database();

export default db;
