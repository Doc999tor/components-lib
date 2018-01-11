import {withRouter} from 'react-router'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {prepeaTime, parceTime, handleDurationNumber} from '../../../services/helperServices.js'
import * as apiServices from '../../../services/apiServices.jsx'

import {setBottomNavColbecks, bottomNavTextTranslationID} from '../../../components/bottomnav/bottomnavServices.js'
import Bottomnav from '../../../components/bottomnav/bottomnav.jsx'

import './edit-services.styl'

const config = window._config

class EditServices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            durationValue: this.props.stateShared.choosingServices.editServices.duration,
            viewDurationValue: this.props.stateShared.choosingServices.editServices.duration + 'm',
            priceValue: 0
        }
        this.handleDurationNumber = handleDurationNumber.bind(this)
        this.prepeaTime = prepeaTime.bind(this)
        this.parceTime = parceTime.bind(this)
        this.updProcedure = this.updProcedure.bind(this)
        bottomNavTextTranslationID.next = config.translations.EditServices.next_button
        bottomNavTextTranslationID.back = config.translations.EditServices.back_button
    }

    componentDidMount() {
        let oldEditServices = this.props.stateShared.choosingServices.editServices
        this.props.handleHeaderText(config.translations.EditServices.editing_service)
        setBottomNavColbecks({
            back: () => {
                this.delProcedure(oldEditServices)
            },
            next: () => {
                this.updProcedure(this.props.stateShared.choosingServices.editServices)
            }
        })
    }

    updProcedure(procedure) {
        apiServices.put('catalog/services/' + procedure.category.id, {
            name: procedure.name || ' ',
            duration: procedure.duration || '30',
            price: procedure.price || '0',
            color: procedure.color || '#ffffff',
            category_id: procedure.category.id || '1'
        }).then(data => {
            let servicesId = procedure.id
            let filterServices = config.services.find((servicesItem, index) => {
                if (servicesId === servicesItem.id) {
                    config.services[index] = {
                        ...procedure,
                        name: procedure.name,
                        duration: procedure.duration,
                        price: procedure.price,
                        color: procedure.color,
                        category_id: procedure.category.id
                    }
                    this.props.removeCategoryEditing()
                    return true
                }
                return false
            })
        })
    }

    delProcedure(procedure) {
        apiServices.delate('catalog/services/categories/' + procedure.category.id).then(data => {
            let servicesId = procedure.id
            let filterServices = config.services.filter((servicesItem) => {
                return servicesId !== servicesItem.id
            })
            config.services = filterServices
            this.props.setServicesList(filterServices)
            this.props.removeCategoryEditing()
        })
    }

    handleInput(value) {
        this.props.updateEditingServices(value)
    }

    colorProcedure(e, color) {
        for (let i in config.translations.addNewServices.color_services) {
            document.querySelectorAll('.edit-services .color-services')[i].style.padding = '14px'
        }
        e.currentTarget.style.padding = '20px'
        this.handleInput({color: color.background})
    }

    componentWillUnmount() {
        this.props.removeCategoryEditing()
        bottomNavTextTranslationID.next = ''
        bottomNavTextTranslationID.back = ''
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
        return (<div className='edit-services'>
            <div className='error-container'>
                <div className='error-content'>
                    <span className='error-message-text'>{config.translations.addNewServices.procedure_name}</span>
                    <input className='input-content-text' placeholder={config.translations.addNewServices.enter_procedure_name} type='text' name='checkClientsList' value={this.props.stateShared.choosingServices.editServices.name} onChange={e => {
                            this.handleInput({name: e.target.value})
                        }}/>
                </div>
                <div className={"choose-category " + this.props.stateShared.addProcedureView}>
                    <div className="category">
                        <div className="choose-category-title" onClick={(e) => {
                                e.currentTarget.parentNode.classList.toggle('active')
                            }}>
                            <img className={'arrow ' + (
                                config.data.boolean.isRTL && 'arrow-back-mr')} src={config.urls.static + 'arrow-back-grey.svg'}/>
                            <span className="title">{this.props.stateShared.choosingServices.editServices.category.name || config.translations.addNewServices.select_category}</span>
                        </div>
                        <ul className='choose-category-list'>
                            {
                                Object.keys(servicesList).map((category, index) => {
                                    return (<li className='choose-category-list-item' key={index} onClick={() => {
                                            this.handleInput({
                                                category: {
                                                    name: category,
                                                    id: servicesList[category].items[0].category.id
                                                }
                                            });
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
                            this.handleInput({
                                price: this.props.stateShared.choosingServices.editServices.price + 1
                            })
                        }}>
                        <i className='add-services'>
                            +
                        </i>
                    </span>
                    <input className='input-price' type='number' value={this.props.stateShared.choosingServices.editServices.price} onChange={e => {
                            this.handleInput({
                                price: + e.target.value
                            })
                        }} name='checkClientsList'/>
                    <span className='procedure-number' onClick={e => {
                            this.handleInput({
                                price: this.props.stateShared.choosingServices.editServices.price - 1
                            })
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
                                            this.props.stateShared.choosingServices.editServices.color === el
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
            <Bottomnav handleAddProcedures={this.props.handleAddProcedures}/>
        </div>)
    }
}
export default connect(state => ({stateShared: state.shared}), dispatch => ({
    updateProcedure: value => {
        dispatch({type: 'UPDATE_NEW_PROCEDURE', value})
    },
    editServices: (value) => {
        dispatch({type: 'EDIT_SERVICE_PROCEDURES', value: value})
    },
    updateEditingServices: (value) => {
        dispatch({type: 'UPDATE_EDITING_SERVICE', value: value})
    },
    updateCategoryEditing: (value) => {
        dispatch({type: 'UPDATE_CATEGORY_EDITING', value: value})
    },
    removeCategoryEditing: (value) => {
        dispatch({type: 'REMOVE_CATEGORY_EDITING', value: value})
    },
    setServicesList: services => {
        dispatch({type: 'UPDATE_PROCEDURES_LIST', services})
    }
}))(withRouter(EditServices))
