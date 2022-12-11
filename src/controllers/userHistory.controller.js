const { validationResult } = require("express-validator");
const { LIMIT_DEFAULT } = require("../configs/app");
const diaryHistoryModel = require("../models/diaryHistory.model");
const mealHistoryModel = require("../models/mealHistory.model");

exports.getMealHistory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { limit = LIMIT_DEFAULT, page = 0, type} = req.query
    let query = { deleted : false, userId: req.userId }
    if(type) {
        query = {
            ... query,
            type
        }
    }
    const option = {
        limit,
        page,
        lean : true,
        select: 'id name image createdAt',
    }
    const jsonRes = await mealHistoryModel.paginate(query, option);
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
}

exports.getDiaryHistory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { limit = LIMIT_DEFAULT, page = 0} = req.query
    let query = { deleted : false, userId: req.userId }
    const option = {
        limit,
        page,
        lean : true,
        select: 'id title content createdAt',
    }
    const jsonRes = await diaryHistoryModel.paginate(query, option);
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
}