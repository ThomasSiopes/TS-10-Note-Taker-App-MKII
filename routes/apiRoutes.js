const fs = require('fs');
let noteData = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        console.log(noteData);
        noteData.push(req.body);
        res.json(true);
        console.lot(noteData);
    });
};