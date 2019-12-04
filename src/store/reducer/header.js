import {fromJS} from 'immutable'

const defutleState=fromJS({
    a:1
})
const headerReducer=(state=defutleState,action)=>{
    return defutleState
}
export default headerReducer