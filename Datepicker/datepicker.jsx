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
    let a = this.props.defaultValue
    return (
      <ComboDatePicker
        order='ymd'
        placeholder='Year,Month,Date'
        date={config.data.birthyear ? this.props.defaultValue : moment().format('YYYY-MM-DD')}
        onChange={(e, a) => {
          this.setState({
            day: moment(this.props.defaultValue).format('DD'),
            month: moment(this.props.defaultValue).format('MM'),
            year: moment(this.props.defaultValue).format('YYYY'),
            // configValue: moment(date).format('YYYY-MM-DD'),
            birthdate: moment(this.props.defaultValue).isValid() ? (moment(this.props.defaultValue).format('MM') + '-' + moment(this.props.defaultValue).format('DD')) : '',
            birthyear: (moment(this.props.defaultValue).isValid() && (moment(this.props.defaultValue).format('YYYY') === config.data.birthyear)) ? moment(this.props.defaultValue).format('YYYY') : '',
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
