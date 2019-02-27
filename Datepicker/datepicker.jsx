import './datepicker.styl'
export default class Datepicker extends React.Component {
  state = {
    birthdate: '',
    day: '',
    month: '',
    year: '',
    birthyear: '',
    configValue: this.props.defaultValue
    // configValue1: this.props.defaultValue1
  }
  render () {
    let date = this.props.newDays
    return (
      <ComboDatePicker
        order='ymd'
        months={config.translations.months}
        placeholder='Year,Month,Date'
        date={(config.data.birthyear ? moment(config.data.birthyear).format('YYYY') : moment().format('YYYY')) + '-'
        + (config.data.birthdate ? moment(config.data.birthdate).format('MM') : moment().format('MM')) + '-'
        + (config.data.birthdate ? moment(config.data.birthdate).format('DD') : moment().format('DD'))}
        onChange={(e, a) => {
          this.setState({
            day: moment(a).format('DD'),
            month: moment(a).format('MM'),
            year: moment(a).format('YYYY'),
            configValue: moment(a).format('YYYY-MM-DD'),
            birthdate: moment(a).isValid() ? (moment(a).format('MM') + '-' + moment(a).format('DD')) : '',
            birthyear: moment(a).isValid() && moment(a).format('YYYY')
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
