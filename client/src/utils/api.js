import axios from 'axios';

let host = 'http://localhost:5000';

const API = {
    login: (email, pass, success) => {
        axios.post(`${host}/users/login`, {email: email, password: pass})
        .then(res => {
            success(res);
        });
    },
    // getUser: (userId, token, success) => {
    //     console.log("userId", userId);
    //     axios.get(`${host}/users/${userId}`, {
            
    //     }).then(res2 => {
    //         console.log(res2.data.username); 
    //         success(res2);
    //     })
    // },
    register: (name, email, pass, success) => {
        axios.post(`${host}/users/signup`, {username: name, email: email, password: pass})
        .then(res => {
            success(res);
        })
        .catch(err => {
            success(err);
        })
    },
    getUsers: (success) => {
        axios.get(`${host}/users/allUsers`)
        .then(res => {
             success(res);
            console.log(res.data);
        })
    },
}

export default API;