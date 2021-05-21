// const fs = require('fs');
// var noteData = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
// var noteArray = noteData.results;

const noteData = require('../db/noteData');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        console.log(noteArray);
        noteData.push(req.body);
        res.json(true);
        console.lot(noteArray);
    });
};