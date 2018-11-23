import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About</a></li> {/* Note that this is still an anchor */}
            <li><Link to="/books">Books</Link></li>
        </ul>

        <div>Hello World!</div>
    </div>

export default Home