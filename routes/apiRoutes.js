const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(0));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    });
};