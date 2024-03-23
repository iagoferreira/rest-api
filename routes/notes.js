const express = require("express")
const { createNote, getNote, getNotes } = require("../database")

const router = express.Router()

router.get("/", async (req, res) => {
  const notes = await getNotes()
  res.send(notes)
})

router.get("/:id", async (req, res) => {
  const id = req.params.id
  const note = await getNote(id)
  res.send(note)
})

router.post("/", async (req, res) => {
  const { title, contents } = req.body
  const note = await createNote(title, contents)
  res.status(201).send(note)
})

module.exports = router
