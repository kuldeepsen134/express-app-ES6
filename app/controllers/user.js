import db from '../models/index.js';
import SKU from '../models/sku.js'


export const createSKU = async (req, res) => {
    try {
        const { product_id, sku } = req.body;
        const data = { product_id, sku }

        const user = await db.SKU.create(data);

        res.send({
            message: 'SKU created has been submitted',
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message,
        });
    }
};



export const getSKUs = async (req, res) => {
    try {
        const skus = await db.SKU.findAll();

        res.send({
            message: 'SKUs retrieve successfuly',
            data: skus,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message,
        });
    }
};



