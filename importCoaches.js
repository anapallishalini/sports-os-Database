const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');

const Coach = require('./models/Coach');

mongoose.connect('mongodb://localhost:27017/sportsOS');

const results = [];

fs.createReadStream('academies.csv')
.pipe(csv())
.on('data', (data) => {

    results.push({

        name: data['Coach Name'],

        sport: data['Coach Sport'],

        experienceYears: parseInt(data['Coach Experience']) || 0,

        certifications: data['Certifications'],

        academy: data['Academy Name'],

        rating: Number(data['Rating']) || 0,

        reviewCount: Number(data['Reviews']) || 0

    });

})
.on('end', async () => {

    await Coach.insertMany(results);

    console.log('Coaches Imported Successfully');

    mongoose.connection.close();

});