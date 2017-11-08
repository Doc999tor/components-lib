import PropTypes from 'prop-types'
import './Select.styl'

export default class Select extends React.Component {
  constructor () {
    super()
    this.state = {
      isVisibleList: false
    }
  }
  render () {
    let arrow = '▼'
    if (this.state.isVisibleList) arrow = '▲'
    else arrow = '▼'
    return (
      <div id='select-main' ref='active' tabIndex='1' onBlur={() => this.setState({isVisibleList: false})}>
        <div className='active' onClick={() => this.setState({isVisibleList: true}, () => this.refs.active.focus())}>
          {this.props.value}<span className='icon'>{arrow}</span>
        </div>
        <div className={this.state.isVisibleList ? 'options' : 'hidden'}>
          {this.props.options.map(i => (<div key={i.label} onClick={() => {
            this.props.onChange(i)
            this.setState({isVisibleList: false})
          }}>{i.label}</div>))}
        </div>
      </div>
    )
  }
}
Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arr
}
Select.defaultProps = {
  onChange: () => {},
  options: [],
  value: ''
}
