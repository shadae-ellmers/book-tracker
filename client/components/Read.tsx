import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Book } from '../../common/Book'
import { addRatingThunk, delReadThunk, fetchRead } from '../actions/read'

export default function Read() {
  const dispatch = useAppDispatch()
  const read = useAppSelector((state) => state.read)
  const [ratedBook, setRatedBook] = useState(0.1)
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
    setRatedBook(0.1)
  }

  const deleteHandler = (id: number) => {
    dispatch(delReadThunk(id))
  }

  return (
    <div className="text-2xl leading-loose">
      <div className="flex flex-row justify-between">
        <h2 className="underline text-3xl font-extrabold pr-10">
          Books I&apos;ve Read
        </h2>
        <a href="/addread" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
            <span className="relative">Add Books</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div>
        {read.map((book) => (
          <div key={book.id} className="flex flex-row py-3">
            <img src={book.cover} alt="book cover" className="block pr-5" />
            <div className="flex flex-col justify-evenly">
              <h3 className="font-extrabold">{book.title}</h3>
              <p className="text-xl">{book.author}</p>
              <div className="flex flex-row pb-3">
                <a
                  href="#_"
                  onClick={() => clickHandler(book)}
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
                    <span className="relative">Update Rating</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
                <a
                  href="#_"
                  onClick={() => deleteHandler(book.id)}
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
                    <span className="relative">Remove</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
            <div className="flex flex-col px-5">
              <p>{book.rating}</p>
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
          </div>
        ))}
      </div>
    </div>
  )
}
