// import moment from 'moment'

export default date => {
  // const locale = config.locale === 'en' ? 'en-gb' : config.locale
  // require(`moment/locale/${locale}`)
  moment.locale(config.locale)
  return moment(date).endOf('day').fromNow()
}

//   let oldDate = moment(date)
//   let currDate = moment.utc()

//   let diff = moment(date).diff(currDate, 'days')
//   let year = 365
//   if (diff === -1) {
//     return 'Yesterday'
//   } else if (diff === 1) {
//     return 'Tomorrow'
//   } else if (diff <= -2 && diff >= -6) {
//     return config.translations.days_ago.replace('{count}', diff * (-1))
//   } else if (diff >= 2 && diff <= 6) {
//     return config.translations.days_in.replace('{count}', diff)
//   } else if (diff <= -7 && diff >= -14) {
//     return config.translations.week_ago.replace('{count}', 1)
//   } else if (diff >= 7 && diff <= 14) {
//     return config.translations.week_in.replace('{count}', 1)
//   } else if (diff <= -14 && diff >= -21) {
//     return config.translations.weeks_ago.replace('{count}', 2)
//   } else if (diff >= 14 && diff <= 21) {
//     return config.translations.weeks_in.replace('{count}', 2)
//   } else if (diff <= -21 && diff >= -28) {
//     return config.translations.weeks_ago.replace('{count}', 3)
//   } else if (diff >= 21 && diff <= 28) {
//     return config.translations.weeks_in.replace('{count}', 3)
//   } else if (diff <= -28 && diff >= -31) {
//     return config.translations.weeks_ago.replace('{count}', 4)
//   } else if (diff >= 28 && diff <= 31) {
//     return config.translations.weeks_in.replace('{count}', 4)
//   } else if (diff <= -31 && diff >= -62) {
//     return config.translations.month_ago.replace('{count}', 1)
//   } else if (diff >= 31 && diff <= 62) {
//     return config.translations.month_in.replace('{count}', 1)
//   } else if (diff <= -62 && diff >= -93) {
//     return config.translations.months_ago.replace('{count}', 2)
//   } else if (diff >= 62 && diff <= 93) {
//     return config.translations.months_in.replace('{count}', 2)
//   } else if (diff <= -365) {
//     return config.translations.year_ago
//   } else if (diff >= year * ) {
//     return config.translations.year_in
//   }
//   //return moment(date).format('DD MM YYYY')

  

//   console.log(diff);
//   if (oldDate < currDate) {
//     return 'lower'
//   }
//   return 'higher'

