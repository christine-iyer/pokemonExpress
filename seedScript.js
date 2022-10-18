//This imports datainto database!

require("dotenv").config()
const mongoose = require('mongoose')
const Poke = require('./models/poke.js');
const pokes = require('./models/pokes.js')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


const pokeDb =async() =>{
     await Poke.deleteMany({})
     await Poke.insertMany(pokes)
}


pokeDb().then(() => {
     mongoose.connection.close()
})