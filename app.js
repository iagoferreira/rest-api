const express = require("express")
const notesRouter = require("./routes/notes")

const app = express()
const PORT = process.env.SERVER_PORT

app.use(express.json())

app.use("/notes", notesRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("something broke!")
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
