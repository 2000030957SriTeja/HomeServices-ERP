import React from 'react'
import { Link } from 'react-router-dom'
export default function Home()
{
    return <div>
        <ul>
            <Link to="http://localhost:3000/home">
            <li>Home</li>
            </Link>
         </ul>
    </div>
}