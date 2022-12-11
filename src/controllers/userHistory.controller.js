const { validationResult } = require("express-validator");
const { LIMIT_DEFAULT } = require("../configs/app");
const bodyHistoryModel = require("../models/bodyHistory.model");
const diaryHistoryModel = require("../models/diaryHistory.model");
const exerciseHistoryModel = require("../models/exerciseHistory.model");
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

exports.getExerciseHistory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { start_at , end_at} = req.query
    let query = { 
        deleted : false, 
        userId: req.userId,
        createdAt: {
            $gte: new Date(`${start_at}T00:00:00.000Z`),
            $lt: new Date(`${end_at}T23:59:59.000Z`)
        }
    }
    const jsonRes = await exerciseHistoryModel.find(query).populate({ path : 'exercise', select: 'name' }).select('time cal exercise');
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
}

exports.getBodyHistory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { start_at , end_at} = req.query
    let query = { 
        deleted : false, 
        userId: req.userId,
        createdAt: {
            $gte: new Date(`${start_at}T00:00:00.000Z`),
            $lt: new Date(`${end_at}T23:59:59.000Z`)
        }
    }
    const jsonRes = await bodyHistoryModel.find(query).select('weight fat createdAt');
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
}