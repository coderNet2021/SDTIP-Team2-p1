const Designer = require('./../models/Designer');
const catchAsync = require('../utils/CatchAsync');

exports.getAllDesigners = catchAsync(async (req, res, next) => {
    const designers = await Designer.find();
  console.log(designers );
    res.status(200).json({
      status: 'success',
      data: {
        designers 
      }
    });
  });