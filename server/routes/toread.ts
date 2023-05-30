import express from 'express'
import { addToRead, getAllToRead } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllToRead()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const book = req.body
  addToRead(book)
    .then((bookArray) => {
      res.json(bookArray[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
