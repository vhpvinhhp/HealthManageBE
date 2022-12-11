const { check } = require("express-validator");

exports.getPostsValidation = [
    check('limit','limit invalid!').optional().isInt(),
    check('page','page invalid!').optional().isInt()
];

exports.getMealHistoryValidation = [
    check('type','Type invalid!').optional().isIn(['morning', 'lunch', 'dinner', 'snack']),
    check('limit','limit invalid!').optional().isInt(),
    check('page','page invalid!').optional().isInt()
];

exports.getDiaryValidation = [
    check('limit','limit invalid!').optional().isInt(),
    check('page','page invalid!').optional().isInt()
];

exports.getExerciseValidation = [
    check('start_at','start_at not empty!').notEmpty(),
    check('end_at','end_at not empty!').notEmpty()
];