import axios from "axios"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASEURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cGlyZXNJbiI6IjhoIiwiaWF0IjoxNjg3NTk5NjU5LCJleHAiOjE2ODc2Mjg0NTl9.j5ta29b2uT2EXC5ql5J6kp1_uReslBQGqZRr7jZVEA0'}
})