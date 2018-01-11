import React, {Component} from 'react'
import {connect} from 'react-redux'
import ModalRemovingServices from '../../../components/modal-removing-services/modal-removing-services.jsx'
import cx from 'classnames'

import './filter-categories.styl'

const config = window._config
class FilterCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryId: 0,
            headerText: '',
            chekedList: false
        }
        this.categoryId = this.categoryId.bind(this)
        this.swipeEnd = this.swipeEnd.bind(this)
        this.swipeStart = this.swipeStart.bind(this)
        this.handleServices = this.handleServices.bind(this)
    }

    componentDidMount() {
        this.props.changeAddProcedureView('all-category')
    }

    categoryId(id) {
        this.setState({categoryId: id})
    }
    eventShareData = {}

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
                this.props.handleHeaderText(category.getAttribute('data-category_name'))
            }
        }
        this.eventShareData = {};
    }

    swipeStart(e) {
        this.eventShareData = {
            startPageX: e.changedTouches[0].pageX,
            startPressTime: new Date()
        }
        e.preventDefault()
    }

    render() {
        let categoriesFilter = this.props.stateShared.choosingServices.servicesList.filter(item => {
            return item.category.name.toLowerCase().indexOf(this.props.stateShared.urlParams.q.toLowerCase()) !== -1
        })
        var categoriesList = {}
        categoriesFilter.forEach(item => {
            categoriesList[item.category.name]
                ? categoriesList[item.category.name].items.push(item)
                : categoriesList[item.category.name] = {
                    name: item.category.name,
                    items: [item]
                }
        })
        return (
            <div ref={categoryList => {
                this.categoryList = categoryList
            }} className='categories-services'>
                <div className='all-category'>
                    {Object.keys(categoriesList).map((category, index) => {
                        return (
                            <div className='category' key={index} onTouchStart={e => this.swipeStart(e)} onTouchEnd={e => this.swipeEnd(e)} data-category_name={category}>
                                <div className='icon-block'>
                                    <span className='pencil' onClick={() => {
                                        this.categoryId(this.props.filterCategories[category].items[index].category.id);
                                        this.categoryList.classList.add('active')
                                    }}>&#9746;</span>
                                    <span className='pencil'>&#10000;</span>
                                </div>
                                <div className='category-arrow' ref={categoryArrow => {
                                    this.categoryArrow = categoryArrow
                                }}>
                                    <img className='arrow-category' src={config.urls.static + 'arrow-back-grey.svg'}/>
                                    ({Object.keys(categoriesList).length}) &nbsp; {category}
                                </div>
                                <div className='category-container' key={'category_' + index}>
                                    {categoriesList[category].items.map((item, index) => {
                                        const colorServices = {
                                            background: categoriesList[category].items[index].color
                                        }
                                        return (
                                            <div className='services-list' key={index}>
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
                                                <label htmlFor='checkClientsList'/>
                                                <label className='myCheckbox'>
                                                    <input className='checkProcedure' type='checkbox' name='checkClientsList' onClick={() => this.handleServices(item)}/>
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
    }
}))(FilterCategories)
FilterCategories.defaultProps = {
    servicesList: []
}
