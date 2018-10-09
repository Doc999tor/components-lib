export default () => {
  const body = {
    added: moment.utc().format('YYYY-MM-DD hh:mm:ss')
  }
  Object.keys(config.urls.fields).forEach(i => {
    if (config.data[i]) {
      if (i === 'debts') {
        body[i] = JSON.stringify(config.data[i])
      } else if (i === 'social') {
        body[i] = JSON.stringify(config.data[i])
      } else if (i === 'notes') {
        body[i] = JSON.stringify(config.data[i])
      } else {
        body[i] = config.data[i]
      }
    }
  })
  return encodeURI(Object.keys(body).map(i => `${i}=${body[i]}`).join('&'))
}
