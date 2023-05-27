import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Read from './Read'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Book, BookInfo } from '../../common/Book'
import { addRatingThunk } from '../actions/read'

export default function ReadList() {
  const dispatch = useAppDispatch()
  const read = useAppSelector((state) => state.read)
  const [ratingButton, setRatingButton] = useState(false)
  const [addRating, setAddRating] = useState({
    title: '',
    author: '',
    rating: 0,
  } as Book)

  // test out use effect for listing books

  const clickHandler = () => {
    setRatingButton(!ratingButton)
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
            {book.rating ? (
              <></>
            ) : (
              <>
                <button onClick={() => clickHandler()}>Add Rating</button>
                {ratingButton ? (
                  <form onSubmit={submitHandler}>
                    <label htmlFor="rating">Rating: </label>
                    <input
                      type="text"
                      value={addRating.rating}
                      name="rating"
                      onChange={changeHandler}
                    />
                  </form>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
