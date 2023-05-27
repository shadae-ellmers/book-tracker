import express from 'express'
import { getAllBooks, addBook, addRating } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllBooks()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const book = req.body
  addBook(book)
    .then((bookArray) => {
      res.json(bookArray[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.patch('/addrating', (req, res) => {
  const user = req.body
  addRating(user)
    .then((user) => {
      res.json(user)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
