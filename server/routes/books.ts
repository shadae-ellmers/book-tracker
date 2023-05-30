import express from 'express'
import { getAllBooks, addBook, addRating, getAllToReadBooks } from '../db/db'

const router = express.Router()

// read books routes

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

// to-read books routes

router.get('/toread', (req, res) => {
  getAllToReadBooks()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/toread', (req, res) => {
  const book = req.body
  addBook(book)
    .then((bookArray) => {
      res.json(bookArray[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
