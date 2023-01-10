import { connectionDB } from "../database/db.js";

export async function insertOrderData(clientId, cakeId, quantity, totalPrice) {
    return await connectionDB.query(
        `INSERT INTO orders ("clientId", "cakeId", quantity, totalprice, createdat) VALUES ($1, $2, $3, $4, NOW());`,
        [clientId, cakeId, quantity, totalPrice]
    );
}

export async function getClientById(clientId) {
    return connectionDB.query(
        `SELECT * FROM clients WHERE id=$1;`,
        [clientId]
    );
}

export async function getCakeById(cakeId) {
    return connectionDB.query(
        `SELECT * FROM cakes WHERE id=$1;`,
        [cakeId]
    );
}
