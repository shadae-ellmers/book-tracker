import request from 'superagent'
import { Book, BookInfo } from '../../common/Book'

const bookUrl = 'api/v1/books'

export function getBooks(): Promise<Book[]> {
  return request.get(bookUrl).then((res) => res.body)
}

export function postOneBook(book: BookInfo) {
  return request
    .post(bookUrl)
    .send(book)
    .then((res) => {
      return res.body
    })
}

export function addARating(book: Book) {
  return request
    .patch(`${bookUrl}/addrating/`)
    .send(book)
    .then((res) => res.body)
}

export function deleteARead(id: number) {
  return request.delete(`${bookUrl}/delete/${id}`).then((book) => {
    book.body
  })
}
