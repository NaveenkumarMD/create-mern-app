import {INCREMENT,DECREMENT} from '../Actions/types'
const initialState={
    count:0
}
export default (state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            console.log("INCREMENT")
            console.log(state)
            return (
                {
                    ...state,
                    count:action.payload,
                }
            )
        case DECREMENT:
            return(
                {
                    ...state,
                    count:action.payload
                }
            )
        default:
            return state
    }
}