import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Read from './Read'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { BookInfo } from '../../common/Book'

export default function ReadList() {
  const dispatch = useAppDispatch()
  const read = useAppSelector((state) => state.read)
  const [ratingButton, setRatingButton] = useState(false)
  const [addRating, setAddRating] = useState('')

  // test out use effect for listing books

  const clickHandler = () => {
    setRatingButton(!ratingButton)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddRating(e.target.name)
  }

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault
    const ratingVal = Number(addRating)
    dispatch(addRatingThunk(ratingVal))
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
                      value={addRating}
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
