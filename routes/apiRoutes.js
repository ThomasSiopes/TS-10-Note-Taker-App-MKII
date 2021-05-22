const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'db', 'db.json');
const noteData = fs.readFileSync(filePath, 'utf8');
const newData = JSON.parse(noteData);

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(newData));

    app.post('/api/notes', (req, res) => {
        let matchSwitch = 1;
        let i;
        for(i = 0; i < newData.length; ++i) {
            if(req.body == newData[i]) {
                matchSwitch = 0;
            }
        }
        if(matchSwitch) {
            req.body.id = i;
            newData.push(req.body);
        }
        fs.writeFile(filePath, JSON.stringify(newData), (err) => {
            if(err) throw err;
        })
        res.json(true);
    });
    
    // app.delete('/api/notes', (req, res) => {});
};