import { connectionDB } from "../database/db.js";

export async function insertOrderData(clientId, cakeId, quantity, totalPrice) {
    return await connectionDB.query(
        `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES ($1, $2, $3, $4, NOW());`,
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

export async function getAllOrders(date) {
    let orderDate = '';
    if(date){
        orderDate = `WHERE DATE("createdAt") = ${date}`;
    }
    return connectionDB.query(
        {text: 
            `SELECT 
                orders.id, TO_CHAR("createdAt", 'YYYY-MM-DD'), quantity, "totalPrice",
                clients.id as "clientId", 
                clients.name AS "name",
                clients.address AS "address",
                clients.phone AS phone,
                cakes.id AS "cakeId",
                cakes.name AS name,
                cakes.price AS price,
                cakes.description AS description,
                cakes.image AS image
            FROM orders 
            JOIN clients ON clients.id = orders."clientId"
            JOIN cakes ON orders."cakeId" = cakes.id ${orderDate}`,
        rowMode: 'array'},
    );
}
