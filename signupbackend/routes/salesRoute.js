const express = require("express");
const router = express.Router();

const CategoryController = require("./../Controller/CategoryController");
const ProductGroupController= require("./../Controller/ProductGroupController");
const DesignerController= require("./../Controller/DesignerController");
const AgeGroupController= require("./../Controller/AgeGroupController");


router.route('/allCategories').get(CategoryController.getAllCategories);

router.route('/allProductGroup').get(ProductGroupController.getAllProductGroups);

router.route('/allDesigners').get(DesignerController.getAllDesigners);

router.route('/allAgeGroup').get(AgeGroupController.getAllAgeGroups);

module.exports = router;
