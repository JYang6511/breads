// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')


// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    


// BAKER SEED DATA ROUTE
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))
})


// export
module.exports = baker                    
