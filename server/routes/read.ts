import express from 'express'
import { getAllRead, addRead, addRating } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllRead()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const book = req.body
  addRead(book)
    .then((bookArray) => {
      res.json(bookArray[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.patch('/addrating/', (req, res) => {
  const book = req.body
  addRating(book)
    .then((book) => {
      res.json(book)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
