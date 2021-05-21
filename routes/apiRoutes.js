const fs = require('fs');
var noteData = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));

module.exports = (app) => {
    console.log(noteData);
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        console.log(noteData);
        noteData.push(req.body);
        res.json(true);
        console.lot(noteData);
    });
};