import mainRequestService from '../request.service.js'

export const getRemindersService = () => {
  const url = config.urls.api_get_reminders
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return mainRequestService(url, options).then(r => r.json().then(data => ({ data, status: r.status })))
}
