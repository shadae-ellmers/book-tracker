import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Book, GoogleBook } from '../../common/Book'
import { searchForBook } from '../apis/googleApi'
import { addBookThunk } from '../actions/google'

function AddBook() {
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

  const handleAdd = (book: GoogleBook) => {
    const formattedBook: Book = {
      id: book.items.volumeInfo.id,
      title: book.items.volumeInfo.title,
      author: book.items.volumeInfo.authors.toString(),
      cover: book.items.volumeInfo.thumbnail,
    }
    dispatch(addBookThunk(formattedBook))
    navigate('/read')
  }

  return (
    <>
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
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
              <div>
                <button onClick={() => handleAdd(book)}>Add Book</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default AddBook
