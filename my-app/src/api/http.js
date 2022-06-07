import axios from 'axios';

const http = axios.create({
    baseURL: `https://my-app-backend-todo.herokuapp.com/`,
})

export {
    http
}