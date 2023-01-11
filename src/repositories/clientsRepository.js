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

export async function getClientOrder(id) {
    return connectionDB.query(
        `SELECT orders.id AS "orderId", quantity, TO_CHAR("createdAt", 'YYYY-MM-DD HH:MM') AS "createdAt", "totalPrice", cakes.name AS "cakeName"
        FROM orders
        JOIN cakes ON orders."cakeId" = cakes.id
        JOIN clients ON orders."clientId" = clients.id WHERE clients.id=$1`,
        [id]
    );
}