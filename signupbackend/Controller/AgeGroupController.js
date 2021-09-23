const AgeGroup = require('./../models/AgeGroup');
const catchAsync = require('../utils/CatchAsync');

exports.getAllAgeGroups = catchAsync(async (req, res, next) => {
    const ageGroups = await AgeGroup.find();
  console.log(ageGroups );
    res.status(200).json({
      status: 'success',
      data: {
        ageGroups 
      }
    });
  });