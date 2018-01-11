import React, {Component} from 'react'
import './topnav.styl'
import {connect} from 'react-redux'
const config = window._config

class Topnav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisibleAddServices: false
    }
    this.addServices = this.addServices.bind(this)
    this.handleConfirmedModal = this.handleConfirmedModal.bind(this)
  }

  handleCreateServices = () => this.setState({isVisibleAddServices: !this.state.isVisibleAddServices})
  addServices() {
    this.setState({isVisibleAddServices: !this.state.isVisibleAddServices})
    this.props.cleanServices([])
  }

  viewTrash = () => {
      return !!document.querySelector('input:checked')
  }

  handleConfirmedModal() {
      document.querySelector('.modal-removing-services-wrap').classList.add('active');
  }

  render () {
    return (
      <div id='topnav'>
        <div className='header'>
          <div className={'icons-l ' + (config.data.boolean.isRTL ? 'right' : 'left')}>
            <div className='icon' onClick={() => { window.history.go(-1) }}><img className={'arrow-back ' + (config.data.boolean.isRTL && 'arrow-back-mr')} src={config.urls.static + 'arrow-back.svg'} /></div>
            <div className={this.viewTrash() ? ' basket visible' : 'hidden'}>
              <img className='trash' src={config.urls.static + 'trash.svg'} onClick={this.handleConfirmedModal} />
            </div>
          </div>
          <div className={'categories ' + (config.data.boolean.isRTL ? 'right' : 'left')}><h1>{!this.state.isVisibleAddServices ? this.props.headerText : config.translations.topnav.procedure_creation }</h1></div>
          <div className={'icons-r ' + (config.isRTL ? 'left' : 'right')}>
            <div className='icon'><img className='add' src={config.urls.static + 'add.svg'} onClick={() => { this.props.handleAddProcedures(true) }} /></div>
            <div className='icon'><img className='more' src={config.urls.static + 'more.svg'} /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({stateShared: state.shared}), dispatch => ({
  cleanServices: services => {
    dispatch({type: 'CLEAN_PROCEDURES', services})
  }
}))(Topnav)
