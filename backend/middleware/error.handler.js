const CustomErrorHandler = require("../services/customErrorHandler");
const {PRODUCTION}=require("../config");
const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = PRODUCTION==="true"?"Internal server error":err.message;

    if (err instanceof CustomErrorHandler) {
        return res.status(err.status).json({ message: err.message });
    }
    res.status(statusCode).json({message});
}

module.exports = errorHandler;