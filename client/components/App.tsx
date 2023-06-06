import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Read from './Read'
import ToRead from './ToRead'
import AddRead from './AddRead'
import AddToRead from './AddToRead'

function App() {
  return (
    <>
      <header className="navbar justify-content-around bg-danger">
        <div>
          <a className="text-decoration-none text-black" href="/read">
            Read
          </a>
        </div>
        <div>
          <a className="text-decoration-none text-black" href="/">
            All Things Books
          </a>
        </div>
        <div>
          <a className="text-decoration-none text-black" href="/toread">
            Read
          </a>
        </div>
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

// #FFEFCD #A58E74 #E09132 #424530
