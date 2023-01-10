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

export async function getOrders(req, res) {
    const { date } = req.query;

    try {
        const orders = await ordersRepository.getAllOrders(date)
        if (orders.rowCount === 0) {
            return res.status(404).send([]);
        }
        res.status(200).send(orders.rows.map(ordersObject));
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

function ordersObject(row) {
    const [
        id, createdAt, quantity, totalPrice,
        clientId, clientName, address,
        phone, cakeId, cakeName,
        price, description, image
    ] = row;

    return {
        client: {
            id: clientId,
            name: clientName,
            address: address,
            phone: phone
        },
        cake: {
            id: cakeId,
            name: cakeName,
            price: price,
            description: description,
            image: image
        },
        orderId: id,
        createdAt,
        quantity,
        totalPrice
    }
}

export async function getOrderById(req, res) {
    const { id } = req.params;

    const idOrder = await ordersRepository.getOrderId(id);
    if (idOrder.rowCount === 0) {
        return res.sendStatus(404);
    }
    res.status(200).send(idOrder.rows.map(ordersObject));
}
