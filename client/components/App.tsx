import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Read from './Read'
import ToRead from './ToRead'
import AddRead from './AddRead'
import AddToRead from './AddToRead'
import './app.css'

function App() {
  return (
    <>
      <header className="bg-fern text-ivory leading-loose text-center">
        <a
          className="block py-4 px-4 text-5xl underline hover:text-natural"
          href="/"
        >
          All Things Books
        </a>
      </header>
      <div className="flex min-h-screen">
        <nav className="w-1/5 bg-fern text-ivory leading-loose">
          <a className="block py-2 px-4 text-3xl hover:text-natural" href="/">
            Home
          </a>
          <a
            className="block py-2 px-4 text-3xl hover:text-natural"
            href="/read"
          >
            Read
          </a>
          <a
            className="block py-2 px-4 text-3xl hover:text-natural"
            href="/toread"
          >
            To Read
          </a>
        </nav>
        <section className="block py-4 px-4 w-4/5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route path="/toread" element={<ToRead />} />
            <Route path="/addread" element={<AddRead />} />
            <Route path="/addtoread" element={<AddToRead />} />
          </Routes>
        </section>
      </div>
    </>
  )
}

export default App

// #FFEFCD #A58E74 #E09132 #424530
