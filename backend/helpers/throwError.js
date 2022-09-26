const throwError = (status, message) => {
    error = new Error(message);
    error.status = status;

    throw error;
}

module.exports = throwError;