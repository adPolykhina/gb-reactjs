import axios from 'axios'

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: 'https://api.chess.com',
        })
    }

    get = (url) => {
        return this.request.get(url)
    }

    post = (url, data) => {
        return this.request.post(url, data)
    }
}

export const request = new Request()
