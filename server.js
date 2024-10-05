const express = require("express")
const route = require("./router/post.route")

const app = express()

app.use(route)

app.listen(4000, () => {
    console.log("server started!")
})