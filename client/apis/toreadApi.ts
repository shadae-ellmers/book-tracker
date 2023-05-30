import request from 'superagent'
import { Book, BookInfo } from '../../common/Book'

const toreadUrl = 'api/v1/toread'

export function getToReadBooks(): Promise<Book[]> {
  return request.get(toreadUrl).then((res) => res.body)
}

export function postOneToReadBook(book: BookInfo) {
  return request
    .post(toreadUrl)
    .send(book)
    .then((res) => {
      return res.body
    })
}
