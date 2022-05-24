import axios from 'axios';

const http = axios.create({
    baseURL: `https://todo-api-learning.herokuapp.com/v1`
})

export {
    http
}