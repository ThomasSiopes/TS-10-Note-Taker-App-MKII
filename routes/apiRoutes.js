const fs = require('fs');
const noteData = fs.readFileSync(__dirname + '/../db/db');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    });
};