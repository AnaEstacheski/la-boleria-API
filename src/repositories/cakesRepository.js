import { connectionDB } from "../database/db.js";

export async function insertCake(name, price, image, description) {
    return connectionDB.query(
        `INSERT INTO cakes (name, price, image, description)
        VALUES ($1, $2, $3, $4);`,
        [name, price, image, description]
    );
}

export async function getCake(name) {
    return connectionDB.query(
        `SELECT * FROM cakes WHERE name=$1;`,
        [name]
    );
}