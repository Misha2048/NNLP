const createRes = (res, code, data, message) => {
    res.status(code).json(
        data,
        code,
        message,
    );
}

module.exports = createRes;