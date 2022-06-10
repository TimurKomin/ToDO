import axios from 'axios';

const http = axios.create({
    baseURL: `http://localhost:4002`,
})

export {
    http
}