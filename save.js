export default () => {
  const body = {
    added: moment.utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
  }
  Object.keys(config.urls.fields).forEach(i => {
    if (config.data[i]) {
      body[i] = config.data[i]
    }
  })
  return encodeURI(Object.keys(body).map(i => `${i}=${body[i]}`).join('&'))
}

