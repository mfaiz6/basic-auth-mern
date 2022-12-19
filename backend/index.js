const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
app.use(cors())
app.use(express.json())
const port = 1337
const UserAuth = require("./user.model")

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB"))
.catch((err => console.log(err)))


app.post("/api/register", async (req, res) => {
    try {
        const newUser = await UserAuth.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json(err)
    }
})






app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})