import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Read from './Read'
import ToRead from './ToRead'
import AddRead from './AddRead'
import AddToRead from './AddToRead'

function App() {
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
          <Route path="/read" element={<Read />} />
          <Route path="/toread" element={<ToRead />} />
          <Route path="/addread" element={<AddRead />} />
          <Route path="/addtoread" element={<AddToRead />} />
        </Routes>
      </section>
    </>
  )
}

export default App
