import * as ordersRepository from "../repositories/ordersRepository.js";

export async function insertOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;

    try {
        const clientExist = await ordersRepository.getClientById(clientId);
        const cakeExist = await ordersRepository.getCakeById(cakeId);
        if (cakeExist.rowCount === 0 || clientExist.rowCount === 0) {
            return res.sendStatus(404)
        }

        await ordersRepository.insertOrderData(clientId, cakeId, quantity, totalPrice)
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }

}