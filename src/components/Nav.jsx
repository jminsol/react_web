import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (<> Nav 
<nav>
    <ol>
        <li><Link to='/'> Home </Link></li>
        {/* Link는 클래스라 함수 가져올수 있다. to는 함수  / <Link> 사이에 빈공간이 유저가 보는 공간 */}
        <li><Link to='/user'> User </Link></li>
        
        <li><Link to = '/item'> Item </Link></li>
        <li><Link to ='/board'> Board </Link></li>

    </ol>
</nav>


</>)

export default Nav

