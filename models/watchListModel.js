const mongoose = require("mongoose")
const watchListSchema = mongoose.Schema({
    title: String,
    moviePoster: String,
    dateReleased: String,
    watched: Boolean
})

module.exports = mongoose.model("Watchlist", watchListSchema)