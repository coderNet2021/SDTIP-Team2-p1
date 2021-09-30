const express = require("express");
const router = express.Router();

const CategoryController = require("./../Controller/CategoryController");
const ProductGroupController = require("./../Controller/ProductGroupController");
const DesignerController = require("./../Controller/DesignerController");
const AgeGroupController = require("./../Controller/AgeGroupController");
const CouponsController = require("../Controller/CouponsController");
const ProductController = require("../Controller/ProductController");
const salesCoupons = require("../models/SalesCoupons");

router.route("/allCategories").get(CategoryController.getAllCategories);

router
  .route("/allProductGroup")
  .get(ProductGroupController.getAllProductGroups);

router.route("/allDesigners").get(DesignerController.getAllDesigners);

router.route("/allAgeGroup").get(AgeGroupController.getAllAgeGroups);

router.route("/allCoupons").get(CouponsController.getAllCoupons);

router.route("/addProduct").post(ProductController.AddProduct);

router.route("/getAllProduct").get(ProductController.getAllProducts);

router.route("/getproductbyid/:id").get(ProductController.getProductById);

// router
//   .route("/getproductbycriteria/:category/:productGroup")
//   .get(ProductController.getProductByCriteria);

router
  .route("/getproductsbycriteria")
  .get(ProductController.getProductsByCriteria);

router.post("/saveCoupon", (request, response) => {
  console.log("test here! Save coupon");
  const SavedCoupon = new salesCoupons({
    code: request.body.code,
    status: request.body.status,
    startDate: request.body.startDate,
    endDate: request.body.endDate,
    percentage: request.body.percentage,
  });
  SavedCoupon.save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      console.log(error);
      response.json(error);
    });
});

module.exports = router;
