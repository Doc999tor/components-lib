import {withRouter} from 'react-router'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import ModalCreateCategory from './modal-create-category/modal-create-category.jsx'
import {prepeaTime, parceTime, handleDurationNumber} from '../../../services/helperServices.js'
import * as apiServices from '../../../services/apiServices.jsx'

import {setBottomNavColbecks, bottomNavTextTranslationID} from '../../../components/bottomnav/bottomnavServices.js'
import Bottomnav from '../../../components/bottomnav/bottomnav.jsx'

import './add-services.styl'

const config = window._config

class AddProcedure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            durationValue: config.translations.addNewServices.durationValue,
            viewDurationValue: config.translations.addNewServices.viewDurationValue,
            priceValue: 0,
            mostUsedColor: this.findMostUsedColor()
        }
        this.saveNewProcedure = this.saveNewProcedure.bind(this)
        this.colorProcedure = this.colorProcedure.bind(this)
        this.handleDurationNumber = handleDurationNumber.bind(this)
        this.prepeaTime = prepeaTime.bind(this)
        this.parceTime = parceTime.bind(this)
        this.findMostUsedColor = this.findMostUsedColor.bind(this)
    }

    componentDidMount() {
        let c = 0
        this.props.stateShared.choosingServices.servicesList.forEach(i => delete i.isChecked && c++)
        this.props.handleHeaderText('procedure creation')
        setBottomNavColbecks({
            back: () => {
                this.props.router.push({pathname: '/home', search: window.location.search})
                return false
            },
            next: () => {
                if (this.props.stateShared.choosingServices.services.category_id || this.props.stateShared.addProcedureView === 'show-most-popular-category' ||  this.props.stateShared.addProcedureView === 'show-select-category') {
                    this.saveNewProcedure(this.props.stateShared.choosingServices.services)
                } else {
                    this.setState({createCategory: true})
                }
                return true
            }
        })
    }

    findMostUsedColor() {
        let categoryName = this.props.stateShared.choosingServices.services.category_name
        if (categoryName) {

            let choosingServices = this.props.stateShared.choosingServices.servicesList
            let servicesList = {};

            choosingServices.forEach(item => {
                servicesList[item.category.name]
                    ? servicesList[item.category.name].items.push(item)
                    : servicesList[item.category.name] = {
                        name: item.category.name,
                        items: [item]
                    }
            })

            let categoryColors = {}
            servicesList[categoryName].items.forEach((item) => {
                categoryColors[item.color]
                    ? (categoryColors[item.color] = categoryColors[item.color] + 1)
                    : categoryColors[item.color] = 1
            })

            let categoryColorsLength = [];
            Object.keys(categoryColors).forEach((item) => {
                categoryColorsLength.push(categoryColors[item])
            })

            let mostPopularColor;
            Object.keys(categoryColors).forEach((item) => {
                if (Math.max(...categoryColorsLength) === categoryColors[item]) {
                    mostPopularColor = item;
                }
            })

            return mostPopularColor
        }
    }

    saveNewProcedure(newProcedure) {
        let params = {
            name: newProcedure.name || ' ',
            duration: this.state.durationValue || '30',
            price: newProcedure.price || '0',
            color: newProcedure.color || this.state.mostUsedColor || '#ffffff',
            category_id: newProcedure.category_id || this.chooseMostPopularCategory().id || '1',
            added: new Date().toJSON()
        }

        apiServices.post('catalog/services', params).then(data => {
            let newServices = {...newProcedure, ...params}
            newServices.category = {
                "id": newServices.category_id,
                "name": newServices.category_name
            }
            delete newServices.added
            delete newServices.category_id
            delete newServices.category_name
            this.props.updateProcedure({name: '', category_id: undefined, category_name: ''})

            config.services.push(newServices)
            this.props.router.push({pathname: '/', search: window.location.search})
        })
    }

    colorProcedure(e, color) {
        for (let i in config.translations.addNewServices.color_services) {
            document.querySelectorAll('.add-procedure .color-services')[i].style.padding = '14px'
        }
        e.currentTarget.style.padding = '20px'
        this.handleInput({color: color.background})
    }

    chooseMostPopularCategory() {
        let choosingServices = this.props.stateShared.choosingServices.servicesList
        let servicesList = {};

        choosingServices.forEach(item => {
            servicesList[item.category.name]
                ? servicesList[item.category.name].items.push(item)
                : servicesList[item.category.name] = {
                    name: item.category.name,
                    items: [item]
                }
        })

        let categoriesLength = [];
        Object.keys(servicesList).forEach((item) => {
            categoriesLength.push(servicesList[item].items.length)
        })
        let mostPopularCategory;
        Object.keys(servicesList).forEach((item) => {
            if (Math.max(...categoriesLength) === servicesList[item].items.length) {
                mostPopularCategory = servicesList[item];
            }
        })

        return {
            name: mostPopularCategory.name,
            id: servicesList[mostPopularCategory.name].items[0].category.id
        }
    }

    handleInput(value) {
        this.props.updateProcedure(value)
    }

    render() {
        let choosingServices = this.props.stateShared.choosingServices.servicesList
        let servicesList = {};
        choosingServices.forEach(item => {
            servicesList[item.category.name]
                ? servicesList[item.category.name].items.push(item)
                : servicesList[item.category.name] = {
                    name: item.category.name,
                    items: [item]
                }
        })
        return (<div className='add-procedure'>
            <div className='error-container'>
                <div className='error-content'>
                    <span className='error-message-text'>{config.translations.addNewServices.procedure_name}</span>
                    <input className='input-content-text' placeholder={config.translations.addNewServices.enter_procedure_name} type='text' name='checkClientsList' value={this.props.stateShared.choosingServices.services.name} onChange={e => {
                            this.handleInput({name: e.target.value})
                        }}/>
                </div>
                <div className={"choose-category " + this.props.stateShared.addProcedureView}>
                    <div className="most-popular-category">
                        <div className="choose-category-title">
                            <span className="title">{this.chooseMostPopularCategory().name}</span>
                        </div>
                    </div>
                    <div className="category">
                        <div className="choose-category-title" onClick={(e) => {
                                e.currentTarget.parentNode.classList.toggle('active')
                            }}>
                            <img className={'arrow ' + (
                                config.data.boolean.isRTL && 'arrow-back-mr')} src={config.urls.static + 'arrow-back-grey.svg'}/>
                            <span className="title">{this.props.stateShared.choosingServices.services.category_name || config.translations.addNewServices.select_category}</span>
                        </div>
                        <ul className='choose-category-list'>
                            {
                                Object.keys(servicesList).map((category, index) => {
                                    return (<li className='choose-category-list-item' key={index} onClick={() => {
                                            this.handleInput({category_name: category, category_id: servicesList[category].items[0].category.id});
                                        }}>
                                        ({servicesList[category].items.length}) &nbsp; {category}
                                        category
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='error-content'>
                    <span className='error-message-text'>{config.translations.global.duration}</span>
                    <span className='procedure-number' onClick={() => {
                            this.handleDurationNumber(1)
                        }}>
                        <i className='add-services'>+</i>
                    </span>
                    <input className='input-duration' type='text' value={this.state.viewDurationValue} onChange={e => this.setState({viewDurationValue: e.target.value})} onBlur={(e) => this.handleDurationNumber(e.target.value)} name='checkClientsList'/>
                    <span className='procedure-number' onClick={() => this.handleDurationNumber(-1)}>
                        <i className='minus-services'>-</i>
                    </span>
                </div>

                <div className='error-content'>
                    <span className='error-message-text'>{config.translations.addNewServices.price}</span>
                    <span className='procedure-number' onClick={e => {
                            this.setState({
                                priceValue: e.currentTarget.parentNode.querySelector('.input-price').value = this.state.priceValue = this.state.priceValue + 1
                            });
                            this.handleInput({price: this.state.priceValue})
                        }}>
                        <i className='add-services'>
                            +
                        </i>
                    </span>
                    <input className='input-price' type='number' defaultValue={this.state.priceValue} onChange={e => {
                            this.setState({
                                priceValue: + e.target.value
                            });
                            this.handleInput({price: this.state.priceValue})
                        }} name='checkClientsList'/>
                    <span className='procedure-number' onClick={e => {
                            this.setState({
                                priceValue: e.currentTarget.parentNode.querySelector('.input-price').value = this.state.priceValue = (+ this.state.priceValue - 1)
                                    ? + this.state.priceValue - 1
                                    : 1
                            });
                            this.handleInput({price: this.state.priceValue})
                        }}>
                        <i className='minus-services'>-</i>
                    </span>
                </div>
            </div>
            <div className='select-color-text'>{config.translations.addNewServices.select_color}</div>
            <div className='select-color-container'>
                <div className='circrle-container'>
                    {
                        config.translations.addNewServices.color_services.map((el, key) => {
                            const colorServices = {
                                background: el
                            }
                            return (<div className='circrle-color' key={key}>
                                <div style={{
                                        padding: (
                                            this.state.mostUsedColor === el
                                            ? '20px'
                                            : '14px'),
                                        ...colorServices
                                    }} onClick={e => {
                                        this.colorProcedure(e, colorServices)
                                    }} className='color-services'/>
                            </div>)
                        })
                    }
                </div>
            </div>
            <ModalCreateCategory modalCreate={this.state.createCategory} toogleModal={() => this.setState({createCategory: false})}/>
            <Bottomnav handleAddProcedures={this.props.handleAddProcedures}/>
        </div>)
    }
}
export default connect(state => ({stateShared: state.shared}), dispatch => ({
    updateProcedure: value => {
        dispatch({type: 'UPDATE_NEW_PROCEDURE', value})
    },
    updateProcedureSearchValue: value => {
        dispatch({type: 'UPDATE_PROCEDURE_SEARCH_VALUE', value})
    },
    updateSearchValue: (value) => {
        dispatch({type: 'UPDATE_SEARCH_VALUE', value: value})
    },
    updateNewClient: (value) => {
        dispatch({type: 'UPDATE_NEW_CLIENT', value: value})
    }
}))(withRouter(AddProcedure))
