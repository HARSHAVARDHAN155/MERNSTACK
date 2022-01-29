var express = require("express");
var router = express.Router();

const Vendor = require("../models/Vendor");
const Food = require("../models/Food");
var bcrypt = require("bcrypt");
const Myorders = require("../models/Myorders");
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

router.post("/item_delete", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    console.log(req.body.id);

    Food.deleteOne({ name, email }).then(
        user => {
            if (!user) {
                res.status(400).json(user);
            }
            else {
                res.status(200).json(user);
            }
        }
    )
        .catch((error) => {
            res.status(400).json(user);
            console.log(error);
        });
});
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await Food.findByIdAndRemove(id).exec();
    res.status(200).send("item Deleted");
})

router.put("/update-status", async (req, res) => {
    const status = req.body.status;
    const id = req.body.id;
    try {
        await Myorders.findById(id, (error, ItemToupdate) => {
            ItemToupdate.status = status;
            ItemToupdate.save();
        })
        res.status(200).send("updated");
    } catch (err) {
        console.log(err);
    }
    
})


   


router.put("/update", async (req, res) => {
    const Newprice = req.body.Newprice;
    const Newname = req.body.Newname;
    const id = req.body.id;
    try {
        await Food.findById(id, (error, ItemToupdate) => {
            ItemToupdate.price = Number(Newprice);
            ItemToupdate.name = Newname;
            ItemToupdate.save();
        })
        res.status(200).send("updated");
    } catch (err) {
        console.log(err);
    }
})
router.post("/findstatus",async(req,res)=>{
    const id = req.body.id;
    Myorders.findById(id,(err,user)=>{
        res.status(200).json(user);
    })
})

// router.put("/updateQuantity",async(req,res)=>{
//     const NewQunatity = req.body.NewQunatity;
//     const id = req.body.id;
//     try{
//         await Food.findById(id,(error,ItemToupdate)=>{
//             ItemToupdate.Quantity = Number(NewQunatity);
//             ItemToupdate.save();
//         })
//         res.status(200).send("updated");
//     }catch(err){
//         console.log(err);
//     }
// })

router.post("/addtoorders", async (req, res) => {

    const id = req.body.id;
    try {
        await Food.findById(id, (error, food) => {
            res.status(200).json(food);
            console.log(food)
        })
        // res.status(200).send("updated");
    } catch (err) {
        console.log(err);
    }
})

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
        CanteenName: req.body.CanteenName,
        ManagerName: req.body.MangerName,
        ManagerContact: req.body.ManagerContact,
        opening: req.body.opening,
        closing: req.body.closing,
        Address: req.body.Address,
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

