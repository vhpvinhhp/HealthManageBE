const express = require('express');

const router = express.Router();

router.get('/healthy', (req, res) => {
    const jsonRes = 'Status Check : Healthy'
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
});

module.exports = router;