import React, {Component} from 'react'
import './error404.styl'

const config = window._config

class Error404 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectCount: 10
    }
  }

  tick() {
    if (this.state.redirectCount <= 0) {
      this.props.router.push({pathname: config.routing[0].path , search: window.location.search})
    } else {
      this.setState({
        redirectCount: (this.state.redirectCount - 1)
      })
    }
  }

  componentDidMount() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="error404"></div>
    )
  }
}

export default Error404
