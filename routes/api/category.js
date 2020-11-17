const express = require('express');
const router = express.Router();


// category Model
const Furniture = require('../../models/Furniture');
const Fitting = require('../../models/Fitting');

// @route GET api/category
// @desc Get the items
// @access public
router.get('/furniture', (req, res) => {
    Furniture.find()
        .sort({date: -1})
        .then(items => res.json(items))
} )

// @route GET api/category
// @desc Get the items
// @access public
router.get('/fitting', (req, res) => {
    Fitting.find()
        .sort({date: -1})
        .then(items => res.json(items))
} )

// @route GET api/fitting/items
// @desc Get the items
// @access public
router.post('/fitting/items', (req, res) => {
    Fitting.find({ area: req.body.area.fitting })
        .sort({date: -1})
        .then(items => res.json(items))
    console.log(req.body.area)
} )

// @route GET api/furniture/items
// @desc Get the items
// @access public
router.post('/furniture/items', (req, res) => {

    Furniture.find({ area: req.body.area.furniture })
        .sort({date: -1})
        .then(items => res.json(items))
    console.log(req.body.area)

} )


// @route POST api/
// @desc POST the items
// @access public
router.post('/furniture', (req, res) => {
    const product = new Furniture({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        area: req.body.area,
        imageStrings: req.body.imageStrings
    });

    product.save().then(item => res.json(item))

} )

router.post('/fitting', (req, res) => {
    const product = new Fitting({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        area: req.body.area,
        imageStrings: req.body.imageStrings
    });

    product.save().then(item => res.json(item))

} )


module.exports =  router;
