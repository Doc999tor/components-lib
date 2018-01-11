import React, {Component} from 'react'
import './search.styl'
const config = window._config
import {connect} from 'react-redux'
import cx from 'classnames'

class Search extends Component {
  render () {
    return (
      <div className={cx({'search': true, 'dirty': this.props.stateShared.urlParams.q})}>
        <div className='search-inner'>
          <input dir='rtl' placeholder='search services' name='search' type='search' onChange={e => { this.props.updateSearchValue(e.target.value) }} />
          <img className='search-img' src={config.urls.static + 'search_icon.svg'} />
        </div>
      </div>
    )
  }
}
export default connect(state => ({stateShared: state.shared}), dispatch => ({
  updateSearchValue: value => {
    dispatch({type: 'UPDATE_SEARCH_VALUE', value: value})
  }
}))(Search)
