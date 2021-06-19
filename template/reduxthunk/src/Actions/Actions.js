import {DECREMENT,INCREMENT} from './types'
export const increase=()=>(dispatch,getState)=>{
    dispatch({
        type:INCREMENT,
        payload:getState().value.count+1
    })
}
export const decrease=()=>(dispatch,getState)=>{
    dispatch({
        type:DECREMENT,
        payload:getState().value.count-1
    })
}