import React, {Component} from 'react'
import {connect} from 'react-redux'
import ModalRemovingServices from '../../../components/modal-removing-services/modal-removing-services.jsx'
import ModalRemovingCategory from '../../../components/modal-removing-category/modal-removing-category.jsx'
import {setBottomNavColbecks, bottomNavTextTranslationID} from '../../../components/bottomnav/bottomnavServices.js'
import Bottomnav from '../../../components/bottomnav/bottomnav.jsx'
import cx from 'classnames'

import './categories-services.styl'

const config = window._config
class CategoriesServices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryId: 0,
            headerText: '',
            chekedList: false,
            isShowDeleteCategoryModal: false
        }
        this.categoryId = this.categoryId.bind(this)
        this.swipeEnd = this.swipeEnd.bind(this)
        this.swipeStart = this.swipeStart.bind(this)
        this.handleServices = this.handleServices.bind(this)
    }

    eventShareData = {}

    categoryId(id) {
        this.setState({categoryId: id})
    }

    componentDidMount() {
        this.props.changeAddProcedureView('all-category')
    }

    handleServices = p => {
        this.props.stateShared.choosingServices.servicesList.find((i, k) => {
            if (i.id === p.id) {
                this.props.stateShared.choosingServices.servicesList[k] = {
                    ...i,
                    isChecked: !i.isChecked
                }
                this.props.selectedServices(this.props.stateShared.choosingServices.servicesList[k])
                return true
            }
        })
        this.props.update()
    }

    _getParentByClass(elem, selectNodeClass) {
        if (elem.classList.contains(selectNodeClass)) {
            return elem
        } else if (elem === document.body) {
            console.log('find no select class. check parent node!');
            return false
        } else {
            return this._getParentByClass(elem.parentNode, selectNodeClass)
        }
    }

    swipeEnd(e) {
        let distX = e.changedTouches[0].pageX - this.eventShareData.startPageX
        let category = this._getParentByClass(e.target, 'category') && this._getParentByClass(e.target, 'category')
        let allCategory = this._getParentByClass(e.target, 'all-category') && this._getParentByClass(e.target, 'all-category')
        let isInRange = distX > config.data.numerical.minSwipeLength
        let isPressTimeEnough = +(new Date().getTime() - this.eventShareData.startPressTime.getTime()) > config.data.numerical.howLongSecPressCategory

        if (!category.classList.contains('longpress') && !category.classList.contains('open')) {
            document.querySelector('.longpress') && document.querySelector('.longpress').classList.remove('longpress');
            document.querySelector('.open') && document.querySelector('.open').classList.remove('open');

            if (isPressTimeEnough || isInRange) {
                category.classList.add('longpress')
                let swipedir = (distX < 0)
                    ? 'left'
                    : 'right'
                allCategory.classList.add('some-category-longpress_' + swipedir)
            }

            if (!isPressTimeEnough && !isInRange && distX < 5 && distX > -5) {
                category.classList.add('open')
                allCategory.classList.add('some-category-open')
                this.props.changeAddProcedureView('show-select-category')
                this.props.handleHeaderText(category.getAttribute('data-category_name'))
                this.props.updateProcedure({category_id: this.state.categoryId, category_name: category.getAttribute('data-category_name')})
            }
        }
        this.eventShareData = {};
        e.preventDefault()
    }

    swipeStart(e) {
        this.eventShareData = {
            startPageX: e.changedTouches[0].pageX,
            startPressTime: new Date()
        }
        e.preventDefault()
    }

    render() {
        let servicesList = this.props.stateShared.choosingServices.servicesSearch
            ? this.props.stateShared.CategoriesServices.categoryList
            : {}
        let items = this.props.stateShared.choosingServices.servicesList
        if (this.props.stateShared.choosingServices.servicesList.length) {
            let categoriesList = {}
            let findTwoDifferentItemName = item => {
                if (Object.keys(categoriesList).length > 1) {
                    return true
                } else {
                    categoriesList[item.category.name] = item.category.name
                    return false
                }
            }
            if (items.length > config.data.numerical.max_proc_shown_without_cat && items.some(findTwoDifferentItemName)) {
                let choosingServices = this.props.stateShared.choosingServices.servicesList
                choosingServices.forEach(item => {
                    servicesList[item.category.name]
                        ? servicesList[item.category.name].items.push(item)
                        : servicesList[item.category.name] = {
                            name: item.category.name,
                            items: [item]
                        }
                })
            } else {
                return false
            }
        }

        return (
            <div ref={categoryList => {
                this.categoryList = categoryList
            }} className='categories-services'>
                <div className='all-category'>
                    {Object.keys(servicesList).map((category, index) => {
                        return (
                            <div className='category' key={index} data-category_name={category}>
                                <div className='icon-block'>
                                    <span className='pencil' onClick={() => {
                                        this.categoryId(servicesList[category].items[index].category.id);
                                        this.setState({isShowDeleteCategoryModal: true})
                                    }}>&#9746;</span>
                                    <span className='pencil'>&#10000;</span>
                                </div>
                                <div className='category-arrow' onTouchStart={e => this.swipeStart(e)} onTouchEnd={e => this.swipeEnd(e)} >
                                    <img className={'arrow-category ' + (config.data.boolean.isRTL && 'arrow-back-mr')} src={config.urls.static + 'arrow-back-grey.svg'}/>
                                    ({servicesList[category].items.length}) &nbsp; {category}
                                </div>
                                <div className='category-container' key={'category_' + index}>
                                    {servicesList[category].items.map((item, index) => {
                                        const colorServices = {
                                            background: servicesList[category].items[index].color
                                        }
                                        return (
                                            <div className='services-list' key={index}>
                                                <div className="hendler-click-area" onClick={(e) => { this.props.editServices(item) }}>
                                                    <div className='price-services'>
                                                        {config.translations.global.hryvnia}: {item.price || 0}
                                                    </div>
                                                    <div className='duration-services'>
                                                        {config.translations.global.minutes}: {item.duration || 0}
                                                    </div>
                                                    <div className='name-services'>
                                                        {item.name}
                                                    </div>
                                                    <div style={colorServices} className='color-services'/>
                                                </div>
                                                <label className='myCheckbox'>
                                                    <input className='checkProcedure' data-item_id={item.id} type='checkbox' onClick={(e) => { this.handleServices(item) }}/>
                                                    <span className='checkServices'/>
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <ModalRemovingServices categoryList={this.categoryList} categoryId={this.state.categoryId}/>
                    <ModalRemovingCategory isShow={this.state.isShowDeleteCategoryModal} categoryId={this.state.categoryId} onCloseModal={()=>{ document.querySelector('.longpress').classList.remove('longpress'); this.setState({isShowDeleteCategoryModal: false})}}/>
                </div>
            </div>
        )
    }
}

export default connect(state => ({stateShared: state.shared}), dispatch => ({
    setServices: services => {
        dispatch({type: 'UPDATE_SELECTED_PROCEDURES', services})
    },
    updateProcedure: value => {
        dispatch({type: 'UPDATE_NEW_PROCEDURE', value})
    },
    updateCategory: value => {
        dispatch({type: 'UPDATE_EXISTING_CATEGORY', value})
    },
    selectedServices: services => {
        dispatch({type: 'SELECTED_PROCEDURES_LIST', services})
    },
    changeAddProcedureView: value => {
        dispatch({type: 'CHANGE_ADD_PROCEDURE_VIEW', value})
    },
    editServices: (value) => {
        dispatch({type: 'EDIT_SERVICE_PROCEDURES', value: value})
    }
}))(CategoriesServices)
CategoriesServices.defaultProps = {
    servicesList: []
}
