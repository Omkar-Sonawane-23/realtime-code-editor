import axios, { AxiosInstance } from "axios"

const pistonBaseUrl = "http://localhost:3000"

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
