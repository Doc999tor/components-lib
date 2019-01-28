export default d => {
  var date = new Date((d));
  var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
  var nAgt = navigator.userAgent
  var browserName = navigator.appName
  var fullVersion = '' + parseFloat(navigator.appVersion)
  var majorVersion = parseInt(navigator.appVersion, 10)
  var verOffset
  const {weekdays} = config.translations.dates
  const {months} = config.translations.dates

  if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
    browserName = 'Opera'
    fullVersion = nAgt.substring(verOffset + 6)
    if ((verOffset = nAgt.indexOf('Version')) !== -1)
      fullVersion = nAgt.substring(verOffset + 8)
  }
  else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
    browserName = 'Chrome'
    fullVersion = nAgt.substring(verOffset + 7)
  } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
    browserName = 'Safari'
    fullVersion = nAgt.substring(verOffset + 7)
    if ((verOffset = nAgt.indexOf('Version')) !== -1)
      fullVersion = nAgt.substring(verOffset + 8)
  } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
    browserName = 'Firefox'
    fullVersion = nAgt.substring(verOffset + 8)
  }
  majorVersion = parseInt('' + fullVersion, 10)
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion)
    majorVersion = parseInt(navigator.appVersion, 10)
  }
  if (
    (browserName === 'Safari' && majorVersion <= 10) ||
  (browserName === 'Firefox' && majorVersion <= 29) ||
  (browserName === 'Opera' && majorVersion <= 15) ||
  (browserName === 'Chrome' && majorVersion <= 24)) {
    return weekdays[moment(date).days()] +
    ', ' + months[moment(date).month()] +
     ' ' + moment(date).format('DD') +
      ', ' + moment(date).format('Y')
  }
  return new Intl.DateTimeFormat(config.locale, options).format(date)
}
