const Authors = require('../models/authors.model');

module.exports = {
    getAll: (req, res) => {
        Authors.find({})
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err) => {
                console.log("error in getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        Authors.create(req.body)
            .then((newAuthors) => {
                console.log(newAuthors);
                res.json(newAuthors);
            })
            .catch((err) => {
                console.log("error in create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        Authors.findById(req.params.id)
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor);
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

        Authors.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedAuthors) => {
                console.log(updatedAuthors);
                res.json(updatedAuthors);
            })
            .catch((err) => {
                console.log("error in update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        Authors.findByIdAndDelete(req.params.id)
            .then((deletedAuthors) => {
                console.log(deletedAuthors);
                res.json(deletedAuthors);
            })
            .catch((err) => {
                console.log("error in delete");
                console.log(err);
                res.json(err);
            });
    },
}