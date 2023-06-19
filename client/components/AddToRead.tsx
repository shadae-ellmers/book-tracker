import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { ChangeEvent, FormEvent, useState } from 'react'
import { AGoogleBook, BookInfo, GoogleBook } from '../../common/Book'
import { searchForBook } from '../apis/googleApi'
import { addToReadThunk } from '../actions/google'

function AddToRead() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [bookSearch, setBookSearch] = useState('' as string)
  const [googleResults, setGoogleResults] = useState([] as GoogleBook[])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookSearch(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    searchForBook(bookSearch)
      .then((data) => {
        setGoogleResults(data)
      })
      .catch((err) => console.log(err.message))
  }

  const handleAdd = (book: AGoogleBook) => {
    const formattedBook: BookInfo = {
      book_id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors.toString(),
    }
    dispatch(addToReadThunk(formattedBook))
    navigate('/toread')
  }

  return (
    <div className="text-2xl leading-loose">
      <p>Add a book</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={bookSearch}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      {bookSearch !== '' ? (
        <div>
          {googleResults.items?.map((book) => (
            <div key={book.id}>
              <h2 className="font-extrabold">{book.volumeInfo.title}</h2>
              <p className="text-xl">{book.volumeInfo.authors}</p>
              <div>
                <button onClick={() => handleAdd(book)}>Add Book</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default AddToRead
