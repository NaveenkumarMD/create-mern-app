import React from 'react'
import { Link } from 'react-router-dom'

function Hello() {
    return (
        <div>
            <h1>Hello world</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Hello
