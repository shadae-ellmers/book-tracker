import express from 'express'
import { getAllToRead } from '../db/db'

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

export default router
