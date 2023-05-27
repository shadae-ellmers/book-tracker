import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Read from './Read'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Book, BookInfo } from '../../common/Book'
import { addRatingThunk } from '../actions/read'

export default function ReadList() {
  const dispatch = useAppDispatch()
  const read = useAppSelector((state) => state.read)
  const [ratedBook, setRatedBook] = useState(0)
  const [addRating, setAddRating] = useState({
    title: '',
    author: '',
    rating: 0,
  } as Book)

  // test out use effect for listing books

  const clickHandler = (book: Book) => {
    setRatedBook(book.id)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddRating({
      ...addRating,
      [e.target.name]: Number([e.target.value]),
    })
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault
    dispatch(addRatingThunk(addRating))
  }

  return (
    <div>
      <Link to="/addbook">Add Books</Link>
      <div>
        {read.map((book) => (
          <div key={book.id}>
            <Read {...book} />
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
