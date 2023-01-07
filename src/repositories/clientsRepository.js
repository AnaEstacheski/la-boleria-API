import { connectionDB } from "../database/db.js";

export async function insertClientData(name, address, phone) {
    return connectionDB.query(
        `INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);`,
        [name, address, phone]
    );
}

export async function getClient(name) {
    return connectionDB.query(
        `SELECT * FROM clients WHERE name=$1;`,
        [name]
    );
}