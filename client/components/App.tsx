import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchRead } from '../actions/read'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ReadList from './ReadList'
import AddBook from './AddBook'
import ToReadList from './ToReadList'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRead())
  }, [])

  return (
    <>
      <header>
        <Link to="/">
          <h1>My Books</h1>
        </Link>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<ReadList />} />
          <Route path="/toread" element={<ToReadList />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </section>
    </>
  )
}

export default App
