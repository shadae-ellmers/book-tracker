import connection from './connection'
import { Book } from '../../common/Book'

// read functions

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

export function deleteRead(id: number, db = connection): Promise<number> {
  return db('read').del().where('id', id)
}

// to read functions

export function getAllToRead(db = connection): Promise<Book[]> {
  return db('toread').select('*')
}

export function getToRead(id: number, db = connection): Promise<Book> {
  return db('toread').first().where({ id })
}

export function addToRead(book: Book, db = connection): Promise<Book[]> {
  return db('toread').insert(book).returning(['id', 'title', 'author'])
}

export function deleteToRead(id: number, db = connection): Promise<number> {
  return db('toread').del().where('id', id)
}

// current read functions

export function getAllCurrentRead(db = connection): Promise<Book[]> {
  return db('currentread').select('*')
}

export function addCurrent(book: Book, db = connection): Promise<Book[]> {
  return db('currentread').insert(book).returning(['id', 'title', 'author'])
}

export function deleteCurrent(id: number, db = connection): Promise<number> {
  return db('currentread').del().where('id', id)
}
