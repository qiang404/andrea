import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        // baseURL: 'http://101.200.88.248:8044',
        // baseURL: 'http://localhost:50323/',
        baseURL:'http://123.57.175.146:8048',
        // baseURL:'http://www.hyyclub.xyz/',
        timeout: 5000,
        method:'post'
    })
    return new Promise(resolve => {
        instance(config).then(res => {
            resolve(res.data)
        })
    })
}