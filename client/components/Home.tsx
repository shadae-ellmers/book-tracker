import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <Link to="/read">Read</Link>
      <br />
      <Link to="/toread">To Read</Link>
    </section>
  )
}
