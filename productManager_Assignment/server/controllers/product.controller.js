const Product = require('../models/product.model');

module.exports = {
    getAll: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("error in getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        Product.create(req.body)
            .then((newProducts) => {
                console.log(newProducts);
                res.json(newProducts);
            })
            .catch((err) => {
                console.log("error in create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        Product.findById(req.params.id)
            .then((oneProducts) => {
                console.log(oneProducts);
                res.json(oneProducts);
            })
            .catch((err) => {
                console.log("error in getOne");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedProducts) => {
                console.log(updatedProducts);
                res.json(updatedProducts);
            })
            .catch((err) => {
                console.log("error in update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        Product.findByIdAndDelete(req.params.id)
            .then((deletedProducts) => {
                console.log(deletedProducts);
                res.json(deletedProducts);
            })
            .catch((err) => {
                console.log("error in delete");
                console.log(err);
                res.json(err);
            });
    },
}