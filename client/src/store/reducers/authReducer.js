import { act } from "@testing-library/react"

const defaultState = {
    user: {},
    token: null,
    error: null,
    profile: null,
    username: null
}

const auth = (state = defaultState, action) =>{
    switch(action.type){
        case 'LOGIN': 
        return {
            ...state,
            user: action.payload,
            token: action.payload.token,
            username: action.payload.username
        }
        case 'SHOW_ERROR':
            return{
                ...state,
                error: action.payload
            }
        case 'AFTER_LOGIN':
            return {
                ...state,
                user: action.payload,
                profile: action.payload.Profile
            }
        default:
            return state
    }
}

export default auth;