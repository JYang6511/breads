// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String
},{ toJSON: { virtuals: true }}
)



//VIRTUALS
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',   //parent
    foreignField: 'baker'  //child
})


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
