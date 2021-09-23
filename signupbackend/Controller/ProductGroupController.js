const ProductGroup = require('./../models/ProductGroup');
const catchAsync = require('../utils/CatchAsync');

exports.getAllProductGroups = catchAsync(async (req, res, next) => {
    const productGroups = await ProductGroup.find();
  console.log(productGroups );
    res.status(200).json({
      status: 'success',
      data: {
        productGroups 
      }
    });
  });