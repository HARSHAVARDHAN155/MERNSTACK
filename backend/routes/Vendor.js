var express = require("express");
var router = express.Router();

const Vendor = require("../models/Vendor");

router.get("/", function(req, res) {
    Vendor.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.post("/vendorregister", (req, res) => {
    const newUser = new Vendor({
        MangerName: req.body.MangerName,
        CanteenName: req.body.CanteenName,
        email: req.body.email,
        contact: req.body.contact,
        Address: req.body.Address
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

