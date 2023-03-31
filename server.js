const express = require("express")
const Routes = require("./src/student/routes")

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
	res.send("Hello world!")
})

app.use("/students", Routes)

app.listen(port, () => console.log(`app listening on port ${port}`))
