import API from '../../utils/api'

export const login =(email, pass) => {
    return(dispatch) => {
        API.login(email, pass, res =>{
            console.log("Result", res.data);
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: email, 
                    token: res.data.token,
                    userId: res.data.userId,
                    username: res.data.username
                }
            })

            // API.getUser(res.data.userId, res.data.id,res2 =>{
            //     dispatch({
            //         type: 'AFTER_LOGIN',
            //         payload: res2.data
            //     })
            // })
        })
    }
    
}

export const register =(name, email, pass) => {
    return dispatch=> {
        API.register(name, email, pass, res =>{
            if(res.data.state){
                dispatch(login(email, pass));
            }else{
                if(res){
                    dispatch({
                        type: 'SHOW_ERROR',
                        payload: 'There was an error. Do you already have an account?'
                    })
                }
            }
        })
    }
}
