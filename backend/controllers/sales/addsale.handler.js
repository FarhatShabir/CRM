const { Sale } = require("../../model");
const CustomErrorHandler = require("../../services/customErrorHandler");
const addSale = async (req, res, next) => {
    const existingSale = await Sale.exists({ vehicle_no: req.body.vehicle_no });
    if (existingSale) {
        return next(CustomErrorHandler.alreadyExists(`Existing sale found for vehicle no: ${req.body.vehicle_no}`));
    }
    const sale = new Sale(req.body);
    try {
        await sale.save(async (err, rest) => {
            if (err) {
                return next(err);
            }
            res.status(201).json({ message: `Sale having vehicle no: ${req.body.vehicle_no} saved successfully` });
        });
    } catch (error) {
        return next(err)
    }
}
module.exports = addSale;