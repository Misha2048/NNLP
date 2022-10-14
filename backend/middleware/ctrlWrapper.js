const ctrlWrapper = ctrl => {
    return async (req, res, next) => {
        try {
            return await ctrl(req, res, next);
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = ctrlWrapper;