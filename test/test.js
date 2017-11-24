import reminder from '../reminder'
import moment from 'moment'
test('reminder', () => {
  expect(reminder(1, 'day')).toBe(moment().add(1, 'day').format('YYYY-MM-DD HH:mm'))
})
