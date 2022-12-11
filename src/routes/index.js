const express = require('express');
const { getPosts } = require('../controllers/Posts.Controller');
const { getMealHistory, getDiaryHistory, getExerciseHistory, getBodyHistory } = require('../controllers/userHistory.controller');
const { getProfile } = require('../controllers/users.controller');
const { catchErrors } = require('../handlers/errorHandlers');
const { getPostsValidation, getMealHistoryValidation, getDiaryValidation, getExerciseValidation, getBodyValidation } = require('../utils/validation');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/healthy', (req, res) => {
    const jsonRes = 'Status Check : Healthy'
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
});

router.get('/user', verifyToken, catchErrors(getProfile));
router.get('/user/history/meal', verifyToken, getMealHistoryValidation, catchErrors(getMealHistory));
router.get('/user/history/diary', verifyToken, getDiaryValidation, catchErrors(getDiaryHistory));
router.get('/user/history/exercise', verifyToken, getExerciseValidation , catchErrors(getExerciseHistory));
router.get('/user/history/body', verifyToken, getBodyValidation , catchErrors(getBodyHistory));

router.get('/posts', getPostsValidation, catchErrors(getPosts));

module.exports = router;