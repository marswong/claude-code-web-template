import Database from 'better-sqlite3';

const db = process.env.DB_PATH ? new Database(process.env.DB_PATH) : new Database();

db.pragma('journal_mode = WAL');

export default db;
