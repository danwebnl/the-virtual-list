const { MongoClient } = require("mongodb")
let express = require("express")
const router = express.Router()
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

// use when starting application locally
let mongodbConnection = `mongodb://${process.env.MONGODB_ADMINUSERNAME}:${process.env.MONGODB_ADMINPASSWORD}@localhost:${process.env.MONGODB_PORT}`
// use when starting application as docker container
if (process.env.DATABASE_HOST) {
  mongodbConnection = `mongodb://${process.env.MONGODB_ADMINUSERNAME}:${process.env.MONGODB_ADMINPASSWORD}@${process.env.DATABASE_HOST}:${process.env.MONGODB_PORT}`
}

// console.log("mongodbConnection", mongodbConnection)
// console.log("process.env.DATABASE_HOST", process.env.DATABASE_HOST)

// Create a new MongoClient
const client = new MongoClient(mongodbConnection)

router.get("/", function (req, res) {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  async function main() {
    try {
      await client.connect()
      console.log("Connected successfully to server")

      const database = client.db("the-list")
      const users = database.collection("users")
      const result = await users
        .find()
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray()
      res.send(result)
    } catch (err) {
      console.log(err)
    } finally {
      await client.close()
    }
  }

  main()
})

module.exports = router
