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
    let date = this.props.defaultValue
    return (
      <ComboDatePicker
        order='ymd'
        months={config.translations.months}
        placeholder='Year,Month,Date'
        date={(config.data.birthyear ? moment(date).format('YYYY') : moment().format('YYYY')) + '-'
        + (config.data.birthdate ? moment(date).format('MM') : moment().format('MM')) + '-'
        + (config.data.birthdate ? moment(date).format('DD') : moment().format('DD'))}
        onChange={(e, a) => {
          this.setState({
            day: moment(date).format('DD'),
            month: moment(date).format('MM'),
            year: moment(date).format('YYYY'),
            // configValue: moment(date).format('YYYY-MM-DD'),
            birthdate: moment(date).isValid() ? (moment(date).format('MM') + '-' + moment(date).format('DD')) : '',
            birthyear: (moment(date).isValid() && (moment(date).format('YYYY') === config.data.birthyear)) ? moment(date).format('YYYY') : '',
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
