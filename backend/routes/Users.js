var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var BCRYPT_SALT_ROUNDS = 12;
// Load User model
const User = require("../models/Users");
const Buyer = require("../models/Users1");
const Vendor = require("../models/Vendor");
// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Buyer.find(function (err, users) {
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

router.post("/buyer", (req, res) => {

    const email = req.body.email;
    console.log(req.body);
    let response = {
        name:"",
        email:"",
        contactNumber: ""

    };
    Buyer.findOne({ email}).then(
        user => {
            if (!user) {
                response.val = 0;
                res.json(response);
            }
            else {
                console.log(user);
                response.email = email;
                response.name = user.name;
                response.contactNumber= user.contactNumber;
                console.log(response.name);
                res.json(response);

            }
        }
    )
}

);
module.exports = router;

