import express from 'express'
import { addCurrent, deleteCurrent, getAllCurrentRead } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllCurrentRead()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const book = req.body
  addCurrent(book)
    .then((bookArray) => {
      res.json(bookArray[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.delete('/delete/:id', (req, res) => {
  const book = Number(req.params.id)
  deleteCurrent(book)
    .then((book) => {
      res.json(book)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
