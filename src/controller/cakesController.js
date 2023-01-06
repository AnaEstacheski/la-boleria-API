import * as cakesRepository from '../repositories/cakesRepository.js';

export async function insertCake(req, res) {
    const { name, price, image, description } = req.body;

    try {
        const cakes = await cakesRepository.getCake(name);
        if (cakes.rowCount !== 0) {
            return res.sendStatus(409);
        }

        await cakesRepository.insertCake(name, price, image, description);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}