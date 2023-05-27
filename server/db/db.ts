import connection from './connection'
import { Book } from '../../common/Book'

export function getAllBooks(db = connection): Promise<Book[]> {
  return db('read').select('*')
}

export function getBook(id: number, db = connection): Promise<Book> {
  return db('read').first().where({ id })
}

export function addBook(book: Book, db = connection): Promise<Book[]> {
  return db('read').insert(book).returning(['id', 'title', 'author'])
}

export function addRating(user: Book, db = connection): Promise<number> {
  return db('user').update(user).where('id', user.id)
}
