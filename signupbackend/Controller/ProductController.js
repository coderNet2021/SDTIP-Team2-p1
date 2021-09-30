const Product = require("./../models/Product");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/CatchAsync");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  console.log(products);
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
});

exports.AddProduct = catchAsync(async (req, res, next) => {
  console.log("test ADDing Product");

  const aproduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    productGroup: req.body.productGroup,
  });
  aproduct
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const aproduct = await Product.findById(req.params.id).populate("category");
  console.log(aproduct);
  console.log(aproduct.category._id.toString());

  if (!aproduct) {
    return next(new AppError("no tour found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      aproduct,
    },
  });
});
// exports.getProductByCriteria = catchAsync(async (req, res, next) => {
//   console.log(req.params);
//   const test = { ...req.params };
//   console.log(test);
//   const aproduct = await Product.find({ ...test }).populate(
//     "category productGroup"
//   );
//   console.log(aproduct);

//   if (!aproduct) {
//     return next(new AppError("no tour found with that ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       aproduct,
//     },
//   });
// });

exports.getProductsByCriteria = catchAsync(async (req, res, next) => {
  const search = req.body;
  //console.log(search.category);
  const categoryCriteria = search.category ? { category: search.category } : {};
  //console.log(categoryCriteria);
  const productGroupCriteria = search.productGroup
    ? { productGroup: search.productGroup }
    : {};
  const genderCriteria = search.gender ? { gender: search.gender } : {};
  const onSaleCriteria =
    search.onSale === false || search.onSale === true
      ? { onSale: search.onSale }
      : {};
  const datesCr =
    search.toDate && search.fromDate
      ? {
          date: {
            $gte: new Date(search.fromDate),
            $lte: new Date(search.toDate),
          },
        }
      : {};

  // const products = await Product.aggregate([
  //   {
  //     $match: {
  //       $or: [categoryCriteria, productGroupCriteria],
  //     },
  //   },
  // ]);

  // const test = { ...req.body };
  // console.log(test);
  const products = await Product.find({
    ...categoryCriteria,
    ...productGroupCriteria,
    ...genderCriteria,
    ...onSaleCriteria,
    ...datesCr,
  }).populate("category productGroup");
  //console.log(products);

  if (!products) {
    return next(new AppError("no tour found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
});
