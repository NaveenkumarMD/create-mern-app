import React from 'react'
import {increase,decrease} from '../../Actions/Actions'
import {useDispatch,useSelector,useStore} from 'react-redux'
function Main(props) {
    console.log(props)
    const store=useSelector(state=>state.value.count)
    console.log(store)
    const dispatch=useDispatch()
    return (
        <div style={{textAlign:"center"}}>
            <h1>
                Naveenkumar
            </h1>
            <h1>{store}</h1>
            <button onClick={()=>dispatch(increase())}>INCREMENT</button>
            <button onClick={()=>dispatch(decrease())}>DECREMENT</button>
        </div>
    )
}

export default Main
