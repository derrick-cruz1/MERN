const TeamManager = require('../models/team.model');

module.exports = {
    getAll: (req, res) => {
        TeamManager.find({})
            .sort({playerName: "ascending" })
            .then((allTeamManager) => {
                console.log(allTeamManager);
                res.json(allTeamManager);
            })
            .catch((err) => {
                console.log("error in getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        TeamManager.create(req.body)
            .then((newTeamManager) => {
                console.log(newTeamManager);
                res.json(newTeamManager);
            })
            .catch((err) => {
                console.log("error in create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        TeamManager.findById(req.params.id)
            .then((oneTeamManager) => {
                console.log(oneTeamManager);
                res.json(oneTeamManager);
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

        TeamManager.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedTeamManager) => {
                console.log(updatedTeamManager);
                res.json(updatedTeamManager);
            })
            .catch((err) => {
                console.log("error in update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        TeamManager.findByIdAndDelete(req.params.id)
            .then((deletedTeamManager) => {
                console.log(deletedTeamManager);
                res.json(deletedTeamManager);
            })
            .catch((err) => {
                console.log("error in delete");
                console.log(err);
                res.json(err);
            });
    },
}