export default date => {

  moment.locale(config.locale)
  const defaultDate = moment()
  const newDate = moment(date)
  const diff = newDate.diff(defaultDate, 'days')
  const weekday = config.translations.dates.weekdays[moment(date).get('days')]
  const time = moment(date).format('HH:mm')

  if (date) {
    if (diff <= -14 && diff >= -30 ) {
      return config.translations.last_appointment_week.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'weeks')))
    } else if (diff === -1 && diff < 0) {
      return config.translations.last_appointment_yesterday.replace('{time}', time)
    } else if (diff >= -7 && diff < -1) {
      return config.translations.last_appointment_weekday.replace('{weekday}', weekday).replace('{time}', time)
    } else if (diff >= -14 && diff < 0) {
      return config.translations.last_appointment_days.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'days')))
    } else if (diff < -30 && diff >= -364) {
      if (Math.abs(newDate.diff(defaultDate, 'month')) > 1) {
        return config.translations.last_appointment_months.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'month')))
      } else return config.translations.last_appointment_month.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'month')))
    } else if (diff <= -365 && diff >= -729) {
      return config.translations.last_appointment_year.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'years')))
    } else if (diff <= -730) {
      return config.translations.last_appointment_years.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'years')))
    } else if (diff >= 14 && diff <= 30) {
      return config.translations.next_appointment_week.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'weeks')))
    } else if (diff === 1 && diff > 0) {
      return config.translations.next_appointment_tomorrow.replace('{time}', time)
    } else if (diff <= 7 && diff > 1) {
      return config.translations.next_appointment_weekday.replace('{weekday}', weekday).replace('{time}', time)
    } else if (diff <= 14 && diff > 0) {
      return config.translations.next_appointment_days.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'days')))
    } else if (diff > 30 && diff <= 364) {
      if (Math.abs(newDate.diff(defaultDate, 'month')) > 1) {
        return config.translations.next_appointment_months.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'month')))
      } else return config.translations.next_appointment_month.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'month')))
    } else if (diff >= 365 && diff <= 729) {
      return config.translations.next_appointment_year.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'years')))
    } else if (diff >= 730) {
      return config.translations.next_appointment_years.replace('{date_string}', Math.abs(newDate.diff(defaultDate, 'years')))
    } else if (diff === 0) {
      return time
    }
  } else {
    return false
  }
}
