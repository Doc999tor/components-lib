export default () => {
  const body = {
    added: moment.utc().format('YYYY-MM-DD hh:mm:ss')
  }
  Object.keys(config.urls.fields).forEach(i => {
    if (config.data[i]) {
      body[i] = config.data[i]
    }
  })
  return encodeURI(Object.keys(body).map(i => `${i}=${body[i]}`).join('&'))
}
