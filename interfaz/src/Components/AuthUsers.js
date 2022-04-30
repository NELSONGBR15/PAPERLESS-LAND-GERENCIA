import axios from 'axios';

export default function AuthUsers(){

    const http = axios.create({
        baseURL: "http://127.0.0.1:8000/api/user-login",
        headers:{
            "Content-type" : "application/json"
        }
    });
    return{
        http
    }   

}