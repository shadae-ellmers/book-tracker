import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book } from '../../common/Book'
import { useEffect, useState } from 'react'
import { delCurrentThunk, fetchCurrentRead } from '../actions/currentread'
import { addReadThunk } from '../actions/read'
import { data } from 'autoprefixer'

export default function Home() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const currentread = useAppSelector((state) => state.currentread as Book[])

  useEffect(() => {
    dispatch(fetchCurrentRead())
  }, [dispatch])

  const clickHandler = (book: Book, id: number) => {
    dispatch(addReadThunk(book))
    dispatch(delCurrentThunk(id))
    navigate('/read')
  }

  const deleteHandler = (id: number) => {
    dispatch(delCurrentThunk(id))
  }

  return (
    <section className="text-2xl leading-loose">
      <p className="underline text-3xl font-extrabold">Currently Reading</p>
      {/* map not working on deploy */}
      <div>
        {currentread.length &&
          currentread.map((book) => (
            <div key={book.id} className="flex flex-row py-3">
              <img src={book.cover} alt="book cover" className="block pr-5" />
              <div className="flex flex-col justify-evenly">
                <p className="font-extrabold">{book.title}</p>
                <p className="text-xl">{book.author}</p>
                <div className="flex flex-row py-3">
                  <a
                    href="#_"
                    onClick={() => clickHandler(book, book.id)}
                    className="relative inline-block text-lg group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
                      <span className="relative">Finished Reading</span>
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
            </div>
          ))}
      </div>
    </section>
  )
}
