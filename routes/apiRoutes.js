const fs = require('fs');
const path = require('path');
const noteData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'));

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData.results));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    });
};