import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book } from '../../common/Book'
import { useEffect } from 'react'
import { delCurrentThunk, fetchCurrentRead } from '../actions/currentread'
import { addReadThunk } from '../actions/read'

export default function Home() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const currentread = useAppSelector((state) => state.currentread as Book[])

  useEffect(() => {
    dispatch(fetchCurrentRead())
  }, [dispatch])

  const clickHandler = (book: Book, id: number) => {
    dispatch(addReadThunk(book))
    dispatch(delCurrentThunk(id))
    navigate('/read')
  }

  const deleteHandler = (id: number) => {
    dispatch(delCurrentThunk(id))
  }

  return (
    <section>
      <p>Currently Reading:</p>
      <div>
        {currentread.map((book) => (
          <div key={book.id}>
            <p>{book.title}</p>
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
