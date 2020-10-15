import React from 'react'
import {UserMenu as Menu} from '../components/Menu'

// User = (()={}) 가능 : 왜냐하면 자바스크립트는 함수를 객체로 인정 그러나 파이썬은 안됨. 
const User = ({children}) => (<> 
    <h1>USER</h1>
    <Menu/>
    { children }
  
    



</>)

export default User