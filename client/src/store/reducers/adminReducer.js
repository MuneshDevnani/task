import { CardActions } from '@material-ui/core'
import { act } from 'react-dom/test-utils'

const defaultState = {
    users: [],
}

const admin = (state = defaultState, action) =>{
    switch(action.type){
        case 'GOT_USERS':
            return{
                ...state,
                users: action.payload
            }
        default:
            return state
    }
} 

export default admin;