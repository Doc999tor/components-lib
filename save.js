export default (newPicture, newPictureName, newAgreement) => {
  let body = new FormData()
  let newAgr = newAgreement
  let newPic = newPicture
  const d = moment().format('YYYY-MM-DD HH:mm:ss')
  body.append('added', d)
  newPicture && body.append('photo', newPic, newPictureName)
  body.append('permit_ads', 'false')
  const checkFields = Object.keys(config.urls.fields).map(i => config.urls.fields[i])
  checkFields.forEach(i => {
    const bodyUpdated = config.data[i]
    if (i === 'phone' && !bodyUpdated) body.append(i, null)
    if (bodyUpdated) {
      Array.isArray(bodyUpdated) ? bodyUpdated.length > 0 && body.append(i, JSON.stringify(bodyUpdated)) : body.append(i, encodeURIComponent(bodyUpdated))
    }
  })
  return body
}
