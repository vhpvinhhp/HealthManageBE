const { check } = require("express-validator");

exports.getPostsValidation = [
    check('limit','limit invalid!').optional().isInt(),
    check('page','page invalid!').optional().isInt()
]