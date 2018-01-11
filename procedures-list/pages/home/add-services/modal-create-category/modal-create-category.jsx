import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import * as apiServices from '../../../../services/apiServices.jsx'
import cx from 'classnames'
import './modal-create-category.styl'
const config = window._config

class ModalCreateCategory extends Component {
    constructor() {
        super()
        this.state = {
            newAdress: '',
            switchBoxAdress: false,
            isSecondConfirm: false
        }
        this.saveNewCategory = this.saveNewCategory.bind(this)
    }

    saveNewCategory() {
        apiServices.post('catalog/services/categories', {name: this.state.categoryName, added: new Date().toJSON()}).then(data => {
            this.handleInput({category_id: data, category_name: this.state.categoryName});
            this.props.toogleModal();
        })
    }

    handleInput(value) {
        this.props.updateProcedure(value)
    }

    render() {
        var categoriesList = {}
        this.props.stateShared.choosingServices.servicesList.forEach(item => {
            categoriesList[item.category.name]
                ? categoriesList[item.category.name].items.push(item)
                : categoriesList[item.category.name] = {
                    name: item.category.name,
                    items: [item]
                }
        })
        return (
            <div className='wrap'>
                <div className={cx('app-modal modal-create-category', {
                    'hidden': !this.props.modalCreate
                })}>
                    <div className='modal-body'>
                        <span className='modal-title'>Caution!</span>
                        {Object.keys(categoriesList).map((category, index) => {
                            return (
                                <div className='category-item' key={index} onClick={e => {
                                    this.handleInput({category_id: categoriesList[category].items[0].category.id, category_name: category});
                                    this.props.toogleModal();
                                }}>
                                    <div className='select-wrap'>
                                        <div className='services-number'>
                                            duration ({categoriesList[category].items.length})
                                        </div>
                                        <div className='category-name'>
                                            {category}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='search-wrap'>
                            <div className='cancel-wrap' onClick={e => {
                                this.setState({categoryName: ''})
                            }}>
                                X
                            </div>
                            <div className='block-with-notes'>
                                <textarea value={this.state.categoryName} onChange={e => this.setState({categoryName: e.target.value})} className='comment-content' rows='4' cols='50' placeholder='enter the name of the new category' name='comment' form='usrform'/>
                            </div>
                        </div>
                        <a className='add-category-button' onClick={e => {
                            this.saveNewCategory()
                        }}>ADD</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({stateShared: state.shared}), dispatch => ({
    updateProcedure: value => {
        dispatch({type: 'UPDATE_NEW_PROCEDURE', value})
    }
}))(withRouter(ModalCreateCategory))
