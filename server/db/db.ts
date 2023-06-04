import connection from './connection'
import { Book } from '../../common/Book'

export function getAllRead(db = connection): Promise<Book[]> {
  return db('read').select('*')
}

export function getRead(id: number, db = connection): Promise<Book> {
  return db('read').first().where({ id })
}

export function addRead(book: Book, db = connection): Promise<Book[]> {
  return db('read').insert(book).returning(['id', 'title', 'author'])
}

export function addRating(book: Book, db = connection): Promise<number> {
  return db('read').update(book).where('id', book.id)
}

export function getAllToRead(db = connection): Promise<Book[]> {
  return db('toread').select('*')
}

export function getToRead(id: number, db = connection): Promise<Book> {
  return db('toread').first().where({ id })
}

export function addToRead(book: Book, db = connection): Promise<Book[]> {
  return db('toread').insert(book).returning(['id', 'title', 'author'])
}

export function getAllCurrentRead(db = connection): Promise<Book[]> {
  return db('currentread').select('*')
}
