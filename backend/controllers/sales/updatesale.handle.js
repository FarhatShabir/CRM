const { Sale } = require("../../model");
const CustomErrorHandler = require("../../services/customErrorHandler");
const editSale = async (req, res, next) => {
    try {
        const result = await Sale.updateOne(req.body);
        if (result.modifiedCount) {
            return res.status(200).json({ message: `Sale updated successfully` });
        }
        return next(CustomErrorHandler.noChanges("No changes detected! sale is not modified"));

    } catch (error) {
        return next(error);
    }
}
module.exports = editSale;