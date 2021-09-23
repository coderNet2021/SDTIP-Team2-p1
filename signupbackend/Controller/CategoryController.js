const Category = require('./../models/Category');
const catchAsync = require('../utils/CatchAsync');

exports.getAllCategories = catchAsync(async (req, res, next) => {
    const categories= await Category.find();
  console.log(categories);
    res.status(200).json({
      status: 'success',
      data: {
        categories
      }
    });
  });