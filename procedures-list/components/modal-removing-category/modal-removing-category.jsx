import {withRouter} from 'react-router'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as apiServices from '../../services/apiServices.jsx'
import cx from 'classnames'
import './modal-removing-category.styl'

const config = window._config

class ModalRemovingCategory extends Component {
    constructor() {
        super()
        this.state = {
            isSecondConfirm: false
        }
        this.checkServices = this.checkServices.bind(this)
        this.delateServices = this.delateServices.bind(this)
    }

    closeModal() {
        this.props.onCloseModal()
    }

    _delate() {
        let categoryId = this.props.categoryId
        let filterServices = config.services.filter((servicesItem) => {
            return categoryId !== servicesItem.category.id
        })
        config.services = filterServices
        this.props.setServicesList(filterServices)
        this.closeModal()
    }

    checkServices() {
        apiServices.get('appointments', {category_id: this.props.categoryId}).then(data => {
            if (data.length) {
                this.setState({isSecondConfirm: true})
            } else {
                apiServices.delate('catalog/services/categories/' + this.props.categoryId).then(data => {
                    this._delate()
                })
            }
        })
    }

    delateServices() {
        apiServices.delate('catalog/services/categories/' + this.props.categoryId).then(data => {
            this._delate()
        })
    }

    render() {
        return (<div className={cx('modal-removing-category-wrap', {'active': this.props.isShow})}>
            <div className={cx('app-modal modal-removing-category', {
                    'hidden': !this.state.isSecondConfirm
                })}>
                <div className='warning-block'>
                    <span className='caution-title'>{config.translations.global.caution}</span>
                    <span className='caution-text'>{config.translations.CategoriesServices.really_want_delete}?</span>
                    <div className='warning-block-footer'>
                        <button className='warning-button calendar-button' onClick={() => {
                                this.checkServices();
                            }}>{config.translations.global.delete}</button>
                        <button className='warning-button continue-button' onClick={() => {
                                this.closeModal();
                            }}>{config.translations.global.cancel}</button>
                    </div>
                </div>
            </div>
            <div className={cx('app-modal modal-removing-category', {'hidden': this.state.isSecondConfirm})}>
                <div className='warning-block'>
                    <span className='caution-title'>{config.translations.global.caution}</span>
                    <span className='caution-text'>{config.translations.CategoriesServices.delete_asked_again}</span>
                    <div className='warning-block-footer'>
                        <button className='warning-button calendar-button' onClick={() => {
                                this.delateServices();
                            }}>{config.translations.global.delete}</button>
                        <button className='warning-button continue-button' onClick={() => {
                                this.closeModal()
                            }}>{config.translations.global.cancel}</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default connect(state => ({stateShared: state.shared}), dispatch => ({
    cleanServices: services => {
        dispatch({type: 'CLEAN_PROCEDURES', services})
    },
    selectedServices: services => {
        dispatch({type: 'SELECTED_PROCEDURES_LIST', services})
    },
    setServicesList: services => {
        dispatch({type: 'UPDATE_PROCEDURES_LIST', services})
    }
}))(withRouter(ModalRemovingCategory))
