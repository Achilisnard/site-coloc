//npm init -y
//npm install express
//node server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(__dirname));

// Route pour lire les images du dossier
app.get('/api/images', (req, res) => {
    const imageDir = path.join(__dirname, 'images');
    fs.readdir(imageDir, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }

        const images = files.map(file => `/images/${file}`);
        res.send(images);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});