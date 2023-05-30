import express from 'express'
import { getAllToReadBooks } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllToReadBooks()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
