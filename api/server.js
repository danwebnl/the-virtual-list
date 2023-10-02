const express = require("express")
const cors = require("cors")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const app = express()
app.use(cors())

app.get("/", function (req, res) {
  console.log("GET root")
})

const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(process.env.PORT, () => {
  console.log(`API app listening on port ${process.env.PORT}!`)
})
