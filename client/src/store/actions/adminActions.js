import API from '../../utils/api'
import { connect } from 'react-redux'

export const getUsers = () =>{
    return dispatch =>{
    API.getUsers(res => {
        dispatch({
            type: 'GOT_USERS',
            payload: res.data
         })
     })
  }
}