var express = require("express");
var router = express.Router();

const Vendor = require("../models/Vendor");
const Food = require("../models/Food");
var bcrypt = require("bcrypt");
var BCRYPT_SALT_ROUNDS = 12;
router.get("/food", function (req, res) {
    Food.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

router.post("/fooding", function (req, res) {
    const email = req.body.email;
    console.log(email);

    Food.find({ email }).then(
        user => {

            res.json(user);

        }
        
    )
});

router.post("/vendorregister", (req, res) => {
    console.log(req.body);
    const newUser = new Vendor({
        MangerName: req.body.MangerName,
        CanteenName: req.body.CanteenName,
        email: req.body.email,
        contact: req.body.contact,
        opening: req.body.opening,
        closing: req.body.closing,
        Address: req.body.Address,
        date: req.body.date,
        password: req.body.password
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/addingfood", (req, res) => {
    const newUser = new Food({
        name: req.body.name,
        price: req.body.price,
        email: req.body.email,
        FoodDiscription: req.body.FoodDiscription,
        add_ons: req.body.add_ons,
        date: req.body.date,
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
// POST request 

module.exports = router;

