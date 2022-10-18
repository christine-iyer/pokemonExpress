const mongoose = require('mongoose');

//Make a Schema
const pokeSchema = new mongoose.Schema({
     name: { type: String, required: true }, 
     image: { type: String, required: true },
     readyToEat: Boolean
});

//Make a Model from the Schema
//the Frut model allows us to use the CRUD Create Read Update Destroy in the app

const Poke = mongoose.model('Poke', pokeSchema);
//making a fruits collection

//Export the Model for Use in the App
module.exports=Poke;