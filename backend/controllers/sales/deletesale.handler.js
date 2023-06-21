const { Sale } = require("../../model");
const deleteSale = async (req, res, next) => {
  try {
    const result = await Sale.deleteOne({ vehicle_no: req.params.sell_id });
    if (result.deletedCount) {
      return res.status(200).json({ message: `Sale having sell vehicle no : ${req.params.sell_id} deleted successfully` });
    }
    return next(new Error("Something went wrong please refresh the page"));

  } catch (error) {
    return next(error);
  }
}
module.exports = deleteSale;