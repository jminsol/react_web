import React, {useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'

const UserLogin = () => {
const [userid, setUserid] = useState()
const [userpw, setUserpw] = useState()
// const userData = {
//     userid, userpw // key == value ex. 'id' = userid
// }
const login = e => {
    e.preventDefault()
    alert(`Received ID:  ${userid}, the received PW: ${userpw}`)
    //flask(DB)로 보내기!! post - 보냈더니 then - 이런 결과가 catch - 에러, 실패한 경우
    axios.post(``,{userid, userpw})
        .then(res=> {
            alert('Success!')
        })
        .catch(error=>{
            alert('Fail')
        })


}
const cancel = e => {
    e.preventDefault()


}


return (<User>
<h1> Log in</h1> 
<table>
    <tr>
        <td>ID</td>
        <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
    </tr>
    <tr>
        <td> PW </td>
        <td> <input type="text" onChange={e => setUserpw(`${e.target.value}`)}/> </td>
    </tr>
    <tr>
        <td colSpan='2'> 
            <input type="button" value="LOGIN" onClick={login} />
            <input type="button" value="LOGIN" onClick={cancel} />

        </td>
    </tr>
</table>


</User>)
}
export default UserLogin