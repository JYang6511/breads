// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

//breakdown of the bread document
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: { type: String,  default: 'http://placehold.it/500x500.png'},
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

//HELPER METHODS
breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${this.baker}`
}

//BREAD MODEL
const Bread = mongoose.model('Bread', breadSchema)
//part 1: the variable we are saving our model to
//part 2: Mongoose.model - mongoose method that creates a model for us 
//part 3: 'bread' --> arg 1 is the name of the collection that we want model to connect to
// part 4: breadSchema - arg 2 the schema we want our model to use


//EXPORT BREAD
module.exports = Bread





//
//module.exports = [
//    {
//      name: 'Rye',
//      hasGluten: true,
//      image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
 //      name: 'French',
 //      hasGluten: true,
 //       image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
 //    },
 //    {
//       name: 'Gluten-Free',
//       hasGluten: false,
    //   image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
   //  },
  //   {
   //    name: 'Pumpernickel',
  //     hasGluten: true,
  //     image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
 //    }
//   ]
  


