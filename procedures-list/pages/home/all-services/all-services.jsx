import {withRouter} from 'react-router'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateQuery, clearRepetitiveProcedure} from '../../../services/helperServices.js'
import * as apiServices from '../../../services/apiServices.jsx'
import './all-services.styl'

const config = window._config

class AllServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chekedList: false,
      headerText: 'procedure catalog'
    }
    this.onscroll = this.onscroll.bind(this)
    this.updateQuery = updateQuery.bind(this)
    this.clearRepetitiveProcedure = clearRepetitiveProcedure.bind(this)
    this.handleServices = this.handleServices.bind(this)
    this.onscroll()
  }

  addServices (el) {
    this.clearRepetitiveProcedure(el)
  }

  componentDidMount () {
    this.props.setServicesList(config.services)
    apiServices.get(config.urls.services).then(data => {
      if (data && data.length) {
      }
    })
    this.props.changeAddProcedureView('show-most-popular-category')
  }

  handleServices = p => {
      this.props.stateShared.choosingServices.servicesList.find((i, k) => {
      if (i.id === p.id) {
        this.props.stateShared.choosingServices.servicesList[k] = {...i, isChecked: !i.isChecked}
        this.props.selectedServices(this.props.stateShared.choosingServices.servicesList[k])
        return true
      }
    })
    this.props.update()
  }
  render () {
    return (
      <div className='all-services'>
        {this.props.stateShared.choosingServices.servicesList.map((el, key) => {
          return (
            <div className='services-item' key={key} onClick={(e) => { this.props.editServices(el) }}>
              <div className='price-services'>
                {config.translations.global.hryvnia}: {el.price || 0}
              </div>
              <div className='duration-services'>
                {config.translations.global.minutes}: {el.duration || 0}
              </div>
              <div className='name-services'>
                {el.name}
                <div className='name-services'>
                  {el.category.name}
                </div>
              </div>
              <div style={{
                background: this.props.stateShared.choosingServices.servicesList[key].color
              }} className='color-services' />
              <label htmlFor='checkClientsList' />
              <label className='myCheckbox'>
                <input className='checkProcedure' type='checkbox' name='checkClientsList'
                  onClick={() => this.handleServices(el)} />
                <span className='checkServices' />
              </label>
            </div>
          )
        })}
      </div>
    )
  }
}
export default connect(state => ({stateShared: state.shared}), dispatch => ({
  selectedServices: services => {
    dispatch({type: 'SELECTED_PROCEDURES_LIST', services})
  },
  setServicesList: services => {
    dispatch({type: 'UPDATE_PROCEDURES_LIST', services})
  },
  changeAddProcedureView: state => {
      dispatch({type: 'CHANGE_ADD_PROCEDURE_VIEW', state})
  },
  editServices: (value) => {
      dispatch({type: 'EDIT_SERVICE_PROCEDURES', value: value})
  }
}))(withRouter(AllServices))
AllServices.defaultProps = {
  servicesList: []
}
