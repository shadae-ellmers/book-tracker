import request from 'superagent'
import { GoogleBook } from '../../common/Book'

const googleUrl = 'https://www.googleapis.com/books/v1/volumes?q='

export function searchForBook(book: string): Promise<GoogleBook[]> {
  return request
    .get(`${googleUrl}${book}&key=${process.env.GOOGLE_KEY}`)
    .then((res) => {
      return res.body
    })
}
