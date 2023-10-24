const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')



breads.get('/', (req, res) => {
  Bread.find().then((foundBreads) => {
    res.render('index', {
      breads: foundBreads,
      title: 'Index Page',
    })
  })
})

breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          res.render('show', {
              bread: foundBread
          })
      })
})



// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// // EDIT
// breads.get('/:indexArray/edit', (req, res) => {
//   res.render('edit', {
//     bread: Bread[req.params.indexArray],
//     index: req.params.indexArray
//   })
// })

breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id) 
    .then(foundBread => { 
      res.render('edit', {
        bread: foundBread 
      })
    })
})




// UPDATE
// breads.put('/:arrayIndex', (req, res) => {
//   if(req.body.hasGluten === 'on'){
//     req.body.hasGluten = true
//   } else {
//     req.body.hasGluten = false
//   }
//   Bread[req.params.arrayIndex] = req.body
//   res.redirect(`/breads/${req.params.arrayIndex}`)
// })


breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      res.redirect(`/breads/${req.params.id}`) 
    })
})



// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('error404')
  }
})





  breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id).then(deletedBread => { 
        res.status(303).redirect('/breads')
      })
  })
  


// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})






module.exports = breads


