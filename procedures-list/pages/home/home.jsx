import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as apiServices from '../../services/apiServices.jsx'
import Topnav from '../../components/topnav/topnav.jsx'
import Search from '../../components/search/search.jsx'
import CategoriesServices from './categories-services/categories-services.jsx'
import FilterCategories from './filter-categories/filter-categories.jsx'
import AllServices from './all-services/all-services.jsx'
import AddServices from './add-services/add-services.jsx'
import EditServices from './edit-services/edit-services.jsx'
import FilterServices from './filter-services/filter-services.jsx'
const config = window._config
import './home.styl'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            addServices: false,
            headerText: config.translations.global.procedure_catalog,
            filterCategories: {},
            filterServices: false
        }
    }
    componentDidMount() {
        let c = 0
        this.props.stateShared.choosingServices.servicesList.forEach(i => delete i.isChecked && c++)
        this.props.setServicesList(config.services)
    }

    componentWillMount = () => {
        if (config.isRTL)
            document.getElementsByTagName('body')[0].style.direction = 'rtl'
    }

    handleAddProcedures = p => this.setState({addServices: p})
    handleHeaderText = t => this.setState({headerText: t})
    handleEditProcedures = p => this.setState({editProcedures: p})

    update = () => this.forceUpdate()

    _filterServicesList(servicesList, servicesSearch) {
        let servicesListFilter = servicesList.filter(item => {
            return item.name.toLowerCase().indexOf(servicesSearch.toLowerCase()) !== -1
        })
        this.setState({filterServices: servicesListFilter})
    }

    shouldComponentUpdate(nextS, nextP) {
        if (nextS.stateShared.urlParams.q !== this.props.stateShared.urlParams.q) {
            this._filterServicesList(nextS.stateShared.choosingServices.servicesList, nextS.stateShared.urlParams.q)
            return true
        }
        return true
    }

    update = () => this.forceUpdate()

    currentVuew() {
        let items = this.props.stateShared.choosingServices.servicesList
        if (this.props.stateShared.choosingServices.servicesList ? this.props.stateShared.choosingServices.servicesList.length : '') {
            let categoriesList = {}
            let findTwoDifferentItemName = item => {
                if (Object.keys(categoriesList).length > 1) {
                    return true
                } else {
                    categoriesList[item.category.name] = item.category.name
                    return false
                }
            }
            if (Object.keys(this.props.stateShared.choosingServices.editServices).length) {
                return <EditServices handleHeaderText={this.handleHeaderText} editProcedures={this.state.editProcedures} update={this.update}/>
            } else if (items.length > config.data.numerical.max_proc_shown_without_cat && items.some(findTwoDifferentItemName) && !this.state.addServices && !this.props.stateShared.urlParams.q) {
                return <CategoriesServices update={this.update} handleHeaderText={this.handleHeaderText} handleEditProcedures={this.handleEditProcedures}/>
            } else if (items.length < config.data.numerical.max_proc_shown_without_cat && !this.state.addServices && !this.props.stateShared.urlParams.q) {
                return <AllServices update={this.update}/>
            } else if (this.state.addServices) {
                return <AddServices handleAddProcedures={this.handleAddProcedures} handleHeaderText={this.handleHeaderText}/>
            } else if (this.props.stateShared.urlParams.q && this.state.filterServices.length) {
                return <FilterServices update={this.update}/>
            } else {
                return <FilterCategories handleHeaderText={this.handleHeaderText} update={this.update} filterCategories={this.state.filterCategories}/>
            }
        }
    }

    render() {
        return (
            <div id='home'>
                <Topnav headerText={this.state.headerText} handleAddProcedures={this.handleAddProcedures} isListCheked={this.state.isListCheked}/>
                <Search/> {this.currentVuew()}
            </div>
        )
    }
}

export default connect(state => ({stateShared: state.shared}), dispatch => ({
    setServicesList: services => {
        dispatch({type: 'UPDATE_PROCEDURES_LIST', services})
    }
}))(Home)
