const authorsController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get('/api/authors', authorsController.getAll);
    app.post('/api/authors', authorsController.create);
    app.get('/api/authors/:id', authorsController.getOne);
    app.put('/api/authors/:id', authorsController.update);
    app.delete('/api/authors/:id', authorsController.delete);
}