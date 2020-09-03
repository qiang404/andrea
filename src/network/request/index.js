import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://101.200.88.248:8044',
        timeout: 5000,
        method:'post'
    })
    return new Promise(resolve => {
        instance(config).then(res => {
            resolve(res.data)
        })
    })
}