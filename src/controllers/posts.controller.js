const { validationResult } = require("express-validator");
const { LIMIT_DEFAULT } = require("../configs/app");
const postModel = require("../models/post.model");

exports.getPosts = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { limit = LIMIT_DEFAULT, page = 0} = req.query
    let query = { deleted : false }
    const option = {
        limit,
        page,
        select: 'id title image hashtags createdAt',
        lean : true
    }
    const jsonRes = await postModel.paginate(query, option);
    return res.status(200).json({status: 200, message: 'success', data: jsonRes});
}