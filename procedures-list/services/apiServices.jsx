import {serialize} from './helperServices'

const config = window._config
const myHeaders = new Headers()

myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

var baseOptions = {
    mode: 'cors',
    headers: myHeaders
}

export async function get(url, params, argOptions = {}) {
    var apiUrl = config.urls.base + '/' + url + (
        params
        ? '?' + serialize(params)
        : '')

    baseOptions.method = 'GET'
    baseOptions.body = undefined

    var options = {
        ...baseOptions,
        ...argOptions
    }

    var requestConfig = new Request(apiUrl, options)

    return await _promise(requestConfig)
}

export async function post(url, params, argOptions = {}) {
    var apiUrl = config.urls.base + '/' + url

    baseOptions.method = 'POST'
    baseOptions.body = serialize(params)

    var options = {
        ...baseOptions,
        ...argOptions
    }

    var requestConfig = new Request(apiUrl, options)

    return await _promise(requestConfig)
}

export async function delate(url, params, argOptions = {}) {
    var apiUrl = config.urls.base + '/' + url

    baseOptions.method = 'DELETE'
    baseOptions.body = serialize(params)

    var options = {
        ...baseOptions,
        ...argOptions
    }

    var requestConfig = new Request(apiUrl, options)

    return await _promise(requestConfig)
}

export async function put(url, params, argOptions = {}) {
    var apiUrl = config.urls.base + '/' + url

    baseOptions.method = 'PUT'
    baseOptions.body = serialize(params)

    var options = {
        ...baseOptions,
        ...argOptions
    }

    var requestConfig = new Request(apiUrl, options)

    return await _promise(requestConfig)
}

var _promise = (requestConfig) => {
    return new Promise((resolve, reject) => {
        var request = (requestConfig) => {
            let reqConfig = requestConfig
            window.fetch(reqConfig).then(response => {
                if (reqConfig.method === "GET" && response.status === 200 || reqConfig.method === "POST" && response.status === 201 || (reqConfig.method === "PUT" || reqConfig.method === "PATCH" || reqConfig.method === "DELETE") && response.status === 204) {
                    response.text().then(formattedData => {
                        formattedData
                            ? resolve(JSON.parse(formattedData))
                            : resolve()
                    })
                }
                if (response.status === 503) {
                    setTimeout(() => {
                        request(reqConfig)
                    }, response.headers.get('retry-after') * config.data.request_retry_after)
                }
                if (response.status === 400) {
                    console.error('Response: ', response)
                    reject(response)
                }
                if (response.status === 401) {
                    // to be soon
                }
            }).catch((err) => {
                console.error('Fetch Error', err)
            })
        }
        request(requestConfig)
    })
}
