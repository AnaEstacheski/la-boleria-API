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