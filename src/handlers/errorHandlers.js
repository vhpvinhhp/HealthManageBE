exports.notFound = (req, res) => {
    return res.status(404).json({ status: 404, message: 'Not Found' });
};