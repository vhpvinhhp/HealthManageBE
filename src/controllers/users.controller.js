const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");

exports.getProfile = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await userModel.findById(req.userId);
    const jsonRes = {
        date: user.dateCount,
        achievement: user.achievement,
        percentage: '75%'
    };
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
}