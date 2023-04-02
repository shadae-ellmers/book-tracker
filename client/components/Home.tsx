import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <Link to="/read">Read</Link>
      <br />
      <Link to="/to-read">To Read</Link>
    </section>
  )
}
