const express = require("express")
const cors = require("cors")

app.use(cors())

const port = 3000

app.listen(port, () => {
    console.log("Server is running on ", port);
})