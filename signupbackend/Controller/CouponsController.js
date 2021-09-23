const SalesCoupons = require('./../models/SalesCoupons');
const catchAsync = require('../utils/CatchAsync');

exports.getAllCoupons = catchAsync(async (req, res, next) => {
    const salesCoupons= await SalesCoupons.find();
  console.log(salesCoupons);
    res.status(200).json({
      status: 'success',
      data: {
        salesCoupons
      }
    });
  });