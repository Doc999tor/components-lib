export default () => {
  let body = new FormData()
  const d = moment().format('YYYY-MM-DD hh:mm:ss')
  body.append('added', d)
  const checkFields = Object.keys(config.urls.fields).map(i => config.urls.fields[i])
  checkFields.forEach(i => {
    const bodyUpdated = config.data[i]
    if (bodyUpdated) {
      Array.isArray(bodyUpdated) ? bodyUpdated.length > 0 && body.append(i, JSON.stringify(bodyUpdated)) : body.append(i, bodyUpdated)
    }
  })
  return body
}
