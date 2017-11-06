import './Switch.styl'

export default class Switch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {on: this.props.on}
  }
  componentWillReceiveProps (nextProps) {
    this.setState({on: nextProps.on})
  }
  handleClick = e => {
    e.preventDefault()
    if (this.props.enabled) {
      this.props.onClick()
      this.setState({on: !this.state.on})
    }
  }
  render () {
    const className = ['switch', this.props.className, (this.state.on ? 'on ' : ''), (this.props.enabled ? '' : 'disabled ')].join(' ')
    return (
      <div className={className} onClick={this.handleClick}>
        <div className='switch-toggle' children={this.props.children} />
      </div>
    )
  }
}

Switch.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
  enabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}

Switch.defaultProps = {
  onClick: () => {},
  enabled: true,
  className: '',
  on: false
}
