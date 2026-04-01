const getStatus = (req, res) => {
    res.json({
        status: 'ok',
        message: 'API is running',
        timestamp: new Date()
    });
};

module.exports = { getStatus }