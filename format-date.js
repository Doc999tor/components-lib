export default d => {
  var date = new Date((d));
  var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
  return new Intl.DateTimeFormat(config.locale, options).format(date)
}
      // if (config.lang && (config.lang === 'he')) {
  // } else if (config.lang && (config.lang === 'ru')) {
  //   return new Intl.DateTimeFormat('ru-RUS', options).format(date)
  // }
  // else {
  //   return new Intl.DateTimeFormat('en-US', options).format(date)
  // }
  // return new Intl.DateTimeFormat('en-US', options).format(date)

  // else if (lang === 'ru') {
  //   return new Intl.DateTimeFormat('ru-RUS', options).format(date)
  // }
  // return new Intl.DateTimeFormat('en-US', options).format(date)
  // if (lang === 'he') {
  //   return new Intl.DateTimeFormat('he-IL', options).format(date)
  // } 
  // else if (lang === 'ru') {
  //   return new Intl.DateTimeFormat('ru-RUS', options).format(date)
  // }
  // moment(d).format('ddd, DD MMM, Y')

