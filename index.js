const express = require("express")
const mongoose = require("mongoose")
const movieRoutes = require("./routes")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const cors = require('cors')
mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    dotenv.config()
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static("public"));
    app.use("/api", movieRoutes)
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server has started")
    })
})