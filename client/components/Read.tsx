import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Book } from '../../common/Book'
import { addRatingThunk, fetchRead } from '../actions/read'

export default function Read() {
  const dispatch = useAppDispatch()
  const read = useAppSelector((state) => state.read)
  const [ratedBook, setRatedBook] = useState(0)
  const [addRating, setAddRating] = useState({
    rating: '',
  } as Book)

  useEffect(() => {
    dispatch(fetchRead())
  }, [dispatch])

  const clickHandler = (book: Book) => {
    setAddRating(book)
    setRatedBook(book.id)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddRating({
      ...addRating,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(addRatingThunk(addRating))
    setRatedBook(0)
  }

  return (
    <div>
      <Link to="/addread">Add Books</Link>
      <div>
        {read.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.rating}</p>
            <button onClick={() => clickHandler(book)}>Update Rating</button>
            {ratedBook === book.id ? (
              <form onSubmit={submitHandler}>
                <label htmlFor="rating">Rating: </label>
                <input
                  type="text"
                  value={addRating.rating}
                  name="rating"
                  onChange={changeHandler}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
