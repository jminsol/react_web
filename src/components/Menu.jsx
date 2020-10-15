import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => ( 
<nav>
    <ol>
        <li><Link to='/user/login'> Login </Link></li>
        <li><Link to='/user/signup'> Sign Up </Link></li>
        <li><Link to='/user/remove'> Remove </Link></li>
        <li><Link to='/user/update'> Modifying user's information </Link></li>

    </ol>
</nav>)

export const BoardMenu = () => (
    <nav>
        <ol>
        <li><Link to='/board/create'> Create a post </Link></li>
        <li><Link to='/board/read'> Read a post </Link></li>        
        <li><Link to = '/board/edit'> Edit a post </Link></li>
        <li><Link to ='/board/delete'> Delete a post </Link></li>
    
        </ol>
    </nav>)

export const ItemMenu = () => (
    <nav>
        <ol>
            <li><Link to='/item/create'> Home </Link></li>
            <li><Link to='/item/details'> User </Link></li>            
            <li><Link to = '/item/modify'> Item </Link></li>
            <li><Link to ='/item/delete'> Board </Link></li>
    
        </ol>
    </nav>)



