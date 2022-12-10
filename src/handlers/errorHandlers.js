exports.notFound = (req, res) => {
    return res.status(404).json({ status: 404, message: 'Not Found' });
};

exports.catchErrors = (fn) => {
    return function(req, res, next) {
      return fn(req, res, next).catch(err => {
        return res.status(500).json({ status: 500, message: err.message });
      });
    };
};