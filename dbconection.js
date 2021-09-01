const mongoose = require("mongoose")

const atlas = "mongodb+srv://FredyOrtega:Adfel0922@cluster0.9mwt4.mongodb.net/empresaDB?retryWrites=true&w=majority"



mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.log(err))

module.exports = mongoose