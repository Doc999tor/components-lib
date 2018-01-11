import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bottomNavColbecks, bottomNavTextTranslationID} from './bottomnavServices.js'

import './bottomnav.styl'

const config = window._config

class Bottomnav extends Component {
  constructor(props) {
    super(props)
    this.bottomBack = this.bottomBack.bind(this)
    this.bottomNext = this.bottomNext.bind(this)
  }

  bottomNext () {
    if (bottomNavColbecks.next && bottomNavColbecks.next()) {
      console.log('^^^^^^^^^ colbeck from ^^^^^^^^^')
    }
  }

  bottomBack () {
    if (bottomNavColbecks.back && bottomNavColbecks.back()) {
      console.log('^^^^^^^^^ colbeck from ^^^^^^^^^')
    }
  }

  render () {
    return (
      <div ref={bottombar => {
        this.bottombar = bottombar
      }} className="bottomnav">
        <div className='bottombar-back'>
          <button className='bottom' onClick={this.bottomBack}>{ bottomNavTextTranslationID.back || config.translations.global.cancel}</button>
        </div>
        <div className='bottombar-next'>
          <button className='bottom' onClick={this.bottomNext}>{ bottomNavTextTranslationID.next || config.translations.addNewServices.create_procedure_next}</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({stateShared: state.shared}), dispatch => ({
  setCurrentStep: (step) => {
    dispatch({type: 'UPDATE_CURRENT_STEP', step: step})
  }
}))(withRouter(Bottomnav))
