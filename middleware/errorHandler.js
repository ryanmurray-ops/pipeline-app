const errorHandler = (err, req, res, next) => {
    console.error(err.message); // log the error in the terminal

    res.status(500).json({ message: err.message || 'Server Error'});
};

module.exports = errorHandler;