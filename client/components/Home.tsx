import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book } from '../../common/Book'
import { useEffect } from 'react'
import { delCurrentThunk, fetchCurrentRead } from '../actions/currentread'
import { delReadThunk } from '../actions/read'

export default function Home() {
  const dispatch = useAppDispatch()
  const currentread = useAppSelector((state) => state.currentread as Book[])

  useEffect(() => {
    dispatch(fetchCurrentRead())
  }, [dispatch])

  const clickHandler = (book: Book, id: number) => {
    dispatch(addReadThunk(book))
    dispatch(delCurrentThunk(id))
  }

  const deleteHandler = (id: number) => {
    dispatch(delCurrentThunk(id))
  }

  return (
    <section>
      <div>
        <Link to="/read">Read</Link>
      </div>
      <div>
        <Link to="/toread">To Read</Link>
      </div>
      <h3>Currently Reading:</h3>
      <div>
        {currentread.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => clickHandler(book, book.id)}>
              Finished Reading
            </button>
            <button onClick={() => deleteHandler(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  )
}
