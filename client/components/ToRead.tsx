import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book, BookInfo } from '../../common/Book'
import { useEffect } from 'react'
import { delToReadThunk, fetchToRead } from '../actions/toread'
import { addCurrentThunk } from '../actions/currentread'

export default function ToRead() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const toread = useAppSelector((state) => state.toread as Book[])

  useEffect(() => {
    dispatch(fetchToRead())
  }, [dispatch])

  const clickHandler = (book: Book, id: number) => {
    const formattedBook: BookInfo = {
      title: book.title,
      author: book.author,
      book_id: book.book_id,
    }
    dispatch(addCurrentThunk(formattedBook))
    dispatch(delToReadThunk(id))
    navigate('/')
  }

  const deleteHandler = (id: number) => {
    dispatch(delToReadThunk(id))
  }

  return (
    <div className="text-2xl leading-loose">
      <Link to="/addtoread">Add Books</Link>
      <div>
        {toread.map((book) => (
          <div key={book.id}>
            <h3 className="font-extrabold">{book.title}</h3>
            <p className="text-xl">{book.author}</p>
            <button onClick={() => clickHandler(book, book.id)}>
              Currently Reading
            </button>
            <button onClick={() => deleteHandler(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
