import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {updateQuery, clearRepetitiveProcedure} from '../../../services/helperServices.js'
import React, {Component} from 'react'
import './filter-services.styl'

const config = window._config

class FilterServices extends Component {
  constructor (props) {
    super(props)
    this.state = {
      oldServicesSearch: '',
      servicesFilter: [],
      oldClientListFilterLength: ''
    }
    this._filterServicesList = this._filterServicesList.bind(this)
    this.updateQuery = updateQuery.bind(this)
    this.handleServices = this.handleServices.bind(this)
    this.clearRepetitiveProcedure = clearRepetitiveProcedure.bind(this)
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
  componentDidMount () {
    let choosingServices = this.props.stateShared.choosingServices
    this._filterServicesList(choosingServices.servicesList, this.props.stateShared.urlParams.q)
  }
  componentWillReceiveProps (newProps) {
    let choosingServices = newProps.stateShared.choosingServices
    this._filterServicesList(choosingServices.servicesList, newProps.stateShared.urlParams.q)
    return true
  }

  shouldComponentUpdate (nextS, nextP) {
    if (nextS.stateShared.urlParams.q !== this.props.stateShared.urlParams.q) {
      this._filterServicesList(nextS.stateShared.choosingServices.servicesList, nextS.stateShared.urlParams.q)
      return true
    }
    return true
  }

  _filterServicesList (servicesList, servicesSearch) {
    let servicesListFilter = servicesList.filter(item => {
      return item.name.toLowerCase().indexOf(servicesSearch.toLowerCase()) !== -1
    })
    this.setState({servicesFilter: servicesListFilter})
  }
  addServices (el) {
    this.clearRepetitiveProcedure(el)
  }

  render () {
    return (
      <div className='filter-services'>
        {this.state.servicesFilter.map((el, key) => {
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
                <input className='checkProcedure' type='checkbox' name='checkClientsList' onClick={() => this.handleServices(el) }/>
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
  editServices: (value) => {
      dispatch({type: 'EDIT_SERVICE_PROCEDURES', value: value})
  }
}))(withRouter(FilterServices))
