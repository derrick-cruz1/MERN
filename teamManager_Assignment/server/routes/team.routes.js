const TeamManagerController = require("../controllers/team.controller");

module.exports = (app) => {
    app.get('/api/players', TeamManagerController.getAll);
    app.post('/api/players', TeamManagerController.create);
    app.get('/api/players/:id', TeamManagerController.getOne);
    app.put('/api/players/:id', TeamManagerController.update);
    app.delete('/api/players/:id', TeamManagerController.delete);
}