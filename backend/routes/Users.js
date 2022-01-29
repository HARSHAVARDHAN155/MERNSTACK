var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var BCRYPT_SALT_ROUNDS = 12;
// Load User model
const User = require("../models/Users");
const Buyer = require("../models/Users1");
const Vendor = require("../models/Vendor");
const MyOrders = require("../models/Myorders");
// GET request 
// Getting all the users
router.get("/", function (req, res) {
    MyOrders.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

router.post("/buyer_orders", function (req, res) {
    const buyer_email = req.body.email;
    console.log(buyer_email);

    MyOrders.find({ buyer_email }).then(
        user => {
            if (!user) {
                res.status(200).json("Nodata");
            }

            res.status(200).json(user);

        }

    )
});

router.post("/vendor_orders", function (req, res) {
    const vendor_email = req.body.email;
    // console.log(vendor_email);

    MyOrders.find({ vendor_email }).then(
        user => {
            if (!user) {
                res.status(200).json("Nodata");
            }

            res.status(200).json(user);

        }

    )
});

router.get("/myorders", function (req, res) {
    MyOrders.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
// router.post("/register", (req, res) => {
//     const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         date: req.body.date
//     });

//     newUser.save()
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => {
//             res.status(400).send(err);

//         });
// });

router.post("/userregister", (req, res) => {
    const newUser = new Buyer({
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        age: req.body.age,
        batch: req.body.batch,
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

router.post("/myorder", (req, res) => {
    const newUser = new MyOrders({
        food_name: req.body.Foodname,
        price: req.body.price,
        rating: req.body.rating,
        buyer_email: req.body.buyer_email,
        vendor_email: req.body.vendor_email,
        CanteenName: req.body.CanteenName,
        ManagerName: req.body.ManagerName,
        ManagerContact: req.body.ManagerContact,
        status: req.body.status,
        FoodDiscription: req.body.FoodDiscription,
        date: req.body.date,
        time: req.body.time,
        quantity: req.body.quantity
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post("/buyer_edit", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const newUser = ({
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        age: req.body.age,
        batch: req.body.batch,
        wallet: req.body.wallet,
        date: req.body.date,
        // password: req.body.password
    });

    Buyer.findOne({ email }).then(
        user => {
            if (!user) {
                response.val = 0;
                res.status(400).send(err);
            }
            else {
                user.name = newUser.name,
                    user.contactNumber = newUser.contactNumber,
                    user.age = newUser.age,
                    user.batch = newUser.batch,
                    user.wallet = newUser.wallet,
                    user.save();
                res.status(200).json(user);
            }
        }
    )
});

router.post("/vendor_edit", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const newUser = ({
        Managername: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        Canteen: req.body.Canteen,
        opening: req.body.opening,
        closing: req.body.closing,
        Address: req.body.Address,
        date: req.body.date,
        // password: req.body.password
    });

    Vendor.findOne({ email }).then(
        user => {
            if (!user) {
                response.val = 0;
                res.status(400).send(err);
            }
            else {
                user.MangerName = newUser.Managername,
                    user.email = email,
                    user.contact = newUser.contactNumber,
                    user.CanteenName = newUser.Canteen,
                    user.opening = newUser.opening,
                    user.closing = newUser.closing,
                    user.Address = newUser.Address,
                    user.save();
                res.status(200).json(user);
            }
        }
    )
});

router.post("/fav", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    Buyer.findOne({ email }).then(
        user => {
            if (!user) {

                res.status(400).send(err);
            }
            else {
                user.fav.push(name);
                user.save();
                res.status(200).json(user);
            }
        }
    )

});


router.post("/buyer_wallet", (req, res) => {
    console.log("here is buyer")
    console.log(req.body);
    const email = req.body.email;
    const newUser = ({

        wallet: req.body.wallet,

        // password: req.body.password
    });

    Buyer.findOne({ email }).then(
        user => {
            if (!user) {
                res.status(400);
            }
            else {
                console.log("here");
                user.wallet = newUser.wallet,
                    user.save();
                console.log(user.wallet);
                res.status(200).json(user);
            }
        }
    )
});

// router.post("/buyer", (req, res) => {
//     Buyer.findOne({ email: req.body.email }), function (err, users) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             if (!users) {
//                 console.log("no registration");
//                 res.send("0");
//             }
//             else {
//                 res.json(users);
//             }
//         }
//     }
// });
// POST request qqqqss
// Login

router.post("/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    let response = {
        val: "",
        email: "",
        typeof_login: " "
    };
    arr = 9;

    Vendor.findOne({ email, password }).then(
        user => {
            if (!user) {
                Buyer.findOne({ email, password }).then(
                    user => {
                        if (!user) {
                            response.val = 0;
                            res.json(response);
                        }
                        else {
                            response.val = 1;
                            response.email = email;
                            response.typeof_login = "buyer"
                            res.json(response);
                        }
                    }
                )
            }
            else {
                arr = 1;
                response.val = 1;
                response.email = email;
                response.typeof_login = "vendor"
                res.json(response);
            }
        }
    )

    // res.status(200).json(user);

});

router.post("/xxx", (req, res) => {

    const email = req.body.email;
    console.log(req.body);
    let response = {
        id: "",
        val: "",
        email: "",
        name: " ",
        age: "",
        batch: "",
        contactNumber: " ",
        wallet: "",
    };

    Buyer.findOne({ email }).then(
        user => {
            if (!user) {

                response.val = 0;
                res.json(response.val);

            }
            else {
                arr = 1;
                response.id = user._id;
                response.val = 1;
                response.email = email;
                response.name = user.name;
                response.age = user.age;
                response.batch = user.batch;
                response.wallet = user.wallet;
                response.contactNumber = user.contactNumber;
                res.json(response);
            }
        }
    )

    // res.status(200).json(user);

});

router.post("/buyerdetails", (req, res) => {

    const email = req.body.email;


    Buyer.findOne({ email }).then(
        user => {
            if (!user) {


                res.json(response.val);

            }
            else {
                res.status(200).json(user.fav);
            }
        }
    )

    // res.status(200).json(user);

});

router.post("/vendor", (req, res) => {

    const email = req.body.email;
    console.log(req.body);
    let response = {
        val: "",
        email: "",
        Mangername: " ",
        canteenname: "",
        closing: "",
        opening: "",
        Address: "",
        contactNumber: " ",

    };

    Vendor.findOne({ email }).then(
        user => {
            if (!user) {

                response.val = 0;
                res.json(response.val);

            }
            else {
                arr = 1;
                response.val = 1;
                response.email = email;
                response.Managername = user.MangerName;
                response.canteenname = user.CanteenName;
                response.Address = user.Address;
                response.opening = user.opening;
                response.closing = user.closing;
                response.contactNumber = user.contact;
                res.json(response);
            }
        }
    )

    // res.status(200).json(user);

});



module.exports = router;

