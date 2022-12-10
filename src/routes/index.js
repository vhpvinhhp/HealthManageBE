const express = require('express');
const { getPosts } = require('../controllers/Posts.Controller');
const { catchErrors } = require('../handlers/errorHandlers');
const { getPostsValidation } = require('../utils/validation');

const router = express.Router();

router.get('/healthy', (req, res) => {
    const jsonRes = 'Status Check : Healthy'
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
});
router.get('/posts', getPostsValidation, catchErrors(getPosts));

module.exports = router;