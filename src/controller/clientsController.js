import * as clientsRepository from "../repositories/clientsRepository.js";

export async function insertClient(req, res) {
    const { name, address, phone } = req.body;

    try {
        await clientsRepository.insertClientData(name, address, phone);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

export async function getClientOrders(req, res) {
    const { id } = req.params;

    try {
        const orderByClient = await clientsRepository.getClientOrder(id);
        if (orderByClient.rowCount === 0) {
            return res.sendStatus(404);
        }
        res.status(200).send(orderByClient.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}