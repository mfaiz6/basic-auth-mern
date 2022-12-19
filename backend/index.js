const express = require("express")
const app = express()
const port = 1337


app.post("/api/register", (req, res) => {
    console.log(req.body.name)
})






app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})