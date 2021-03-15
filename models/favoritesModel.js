const mongoose = require("mongoose")
const favoritesSchema = mongoose.Schema({
    title: String,
    moviePoster: String,
    dateReleased: String,
    watched: Boolean
})

module.exports = mongoose.model("Favorite", favoritesSchema)