import './datepicker.styl'
Date.prototype.daysInMonth = function() {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
}
export default class Datepicker extends React.Component {
  state = {
    min: '1930',
    max: new Date().getFullYear()
  }

  renderOptionsYear = () => {
    const arr = []
    for (let i = this.state.max; i >= this.state.min; i--) {
      arr.push(i)
    }
    return (
      arr.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))
    )
  }

  renderOptionsMonth = () => {
    const arr = []
    for (let index = 0; index < 12; index++) {
      arr.push(config.translations.dates.months[index])
    }
    const res = arr.map((opt, index) => {
      let indexStr = (index + 1) + ''
      if (indexStr.length < 2) indexStr = 0 + indexStr
      return (
        <option key={opt} value={indexStr}>
          {opt}
        </option>
      )
    }
    )
    return res
  }

  renderOptionsDay = () => {
    const arr = []
    const month = this.props.month && !isNaN(+this.props.month) ? +this.props.month - 1 : 0
    for (let i = 0; i < new Date(new Date().getFullYear(), month).daysInMonth(); i++) {
      let day = (i + 1) + ''
      if (day.length < 2) day = 0 + day
      arr.push(day)
    }
    const res = arr.map((opt, index) => {
      let indexStr = (index + 1) + ''
      if (indexStr.length < 2) indexStr = 0 + indexStr
      return (
        <option key={opt} value={indexStr}>
          {opt}
        </option>
      )
    }
    )
    return res
  }

  render () {
    return (
      <div className='picker-wrap'>
        <div className='select_wrap'>
          <select className='year' value={this.props.year} onChange={this.props.handleChangeYear}>
            <option value={config.translations.datepicker.placeholder.year} disabled>{config.translations.datepicker.placeholder.year}</option>
            {
              this.renderOptionsYear()
            }
          </select>
        </div>
        <div className={'select_wrap' + (this.props.highlightMonth ? ' warning' : '')}>
          <select className='month' value={this.props.month} onChange={this.props.handleChangeMonth}>
            <option value={config.translations.datepicker.placeholder.month} disabled>{config.translations.datepicker.placeholder.month}</option>
            {
              this.renderOptionsMonth()
            }
          </select>
        </div>
        <div className={'select_wrap' + (this.props.highlightDay ? ' warning' : '')}>
          <select className='day' value={this.props.day} onChange={this.props.handleChangeDay}>
            <option value={config.translations.datepicker.placeholder.day} disabled>{config.translations.datepicker.placeholder.day}</option>
            {
              this.renderOptionsDay()
            }
          </select>
        </div>
      </div>
    )
  }
}
