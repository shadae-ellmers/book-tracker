import express from 'express'
import { getAllBooks } from '../db/readdb'

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

export default router
