import './datepicker.styl'
export default class Datepicker extends React.Component {
  state = {
    birthdate: '',
    day: '',
    month: '',
    year: '',
    birthyear: '',
    configValue: this.props.defaultValue,
    configValue1: this.props.defaultValue1
  }
  render () {
    return (
      <ComboDatePicker
        order='ymd'
        placeholder='Year,Month,Date'
        date={this.state.configValue}
        onChange={(e, date) => {
          this.setState({
            day: moment(date).format('DD'),
            month: moment(date).format('MM'),
            year: moment(date).format('YYYY'),
            configValue: moment(date).format('YYYY-MM-DD'),
            birthdate: moment(date).isValid() ? (moment(date).format('MM') + '-' + moment(date).format('DD')) : '',
            birthyear: moment(date).isValid() ? moment(date).format('YYYY') : ''
          }, () => {
            !!this.props.getBirthdate && this.props.getBirthdate(this.state.birthdate)
            !!this.props.getBirthyear && this.props.getBirthyear(this.state.birthyear)
            !!this.props.getHandleDay && this.props.getHandleDay(this.state.day)
            !!this.props.getHandleMonth && this.props.getHandleMonth(this.state.month)
            !!this.props.getHandleYear && this.props.getHandleYear(this.state.year)
            this.props.handleDate && this.props.handleDate(this.state.birthdate, this.state.birthyear)
          })
        }}
      />

    )
  }
}
