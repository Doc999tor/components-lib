import {validatePhone, Modal} from 'project-components'
// import {clientPostService} from './node_modules/project-services'
import './modal-phone-lib.styl'

export default class PhoneModal extends React.Component {
  static propTypes = {
    isVisibleModalPhone: PropTypes.bool.isRequired,
    toglePhoneModal: PropTypes.func.isRequired,
    sendlink: PropTypes.func
  }
  state = {
    inputValue: ''
  }
  // create = () => {
  //   clientPostService(Save(this.props.newPicture)).then(r => {
  //     if (r.status === 201) {
  //       r.json().then(id => {
  //         config.data.id = id
  //         window.location = config.urls.new_client.replace('{id}', id)
  //       })
  //     }
  //   })
  // }
  // cancel = () => {
  //   this.props.sendlink ? this.props.sendlink() : this.props.create()
  //   this.props.sendlink && this.setState({isValidation: '', inputValue: ''})
  // }
  delInfo = () => {
    this.setState({isValidation: '', inputValue: ''})
  }
  back = () => {
    this.setState({isValidation: '', inputValue: ''})
    this.props.closeModal()
  }
  save = () => {
    config.data[config.urls.fields.phone] = this.state.inputValue
    this.setState({isValidation: '', inputValue: ''})
    this.props.create()
    this.props.closeModal()
  }
  checkPhone = e => {
    this.setState({inputValue: e, isValidation: ''})
    if (e !== '' && e.length >= 3) validatePhone(e) ? this.setState({isValidation: true}) : this.setState({isValidation: false})
  }
  componentDidUpdate = () => this.props.isVisibleModalPhone && this.refs.modal_phone.focus()
  render () {
    return (
      <Modal show={this.props.visibleModal} onHide={this.back}>
        <div className='phone-modal-body'>
          <img className={'close-bnt ' + (config.isRTL ? 'rtl' : 'ltr')} onClick={this.back} src={config.urls.media + 'btn-not.svg'} />
          <div className='phone-top'>
            <div className='picture'>
              <img src={config.urls.media + 'phone-off.svg'} />
            </div>
            <div className='text-wrap'><p>{config.translations.not_found_phone_number}</p></div>
          </div>
          <div className='phone-bot'>
            <div className='phone-bot-text'>
              <p>{config.translations.enter_phone_number}</p>
            </div>
            <div className='phone-input-wrap'>
              <div className='input-wrap'>
                <input
                  type='tel'
                  ref='modal_phone'
                  value={this.state.inputValue}
                  placeholder={config.translations.phone_number}
                  onChange={e => { this.checkPhone(e.target.value) }}
                />
                {this.state.isValidation &&
                <div className='trueValidation'>
                  <img src={config.urls.media + 'trueValid.svg'} />
                </div>}
                {(this.state.inputValue && !this.state.isValidation) &&
                  <div className='del-info' onClick={this.delInfo}>
                    <img src={config.urls.media + 'btn-not.svg'} />
                  </div>}
              </div>
            </div>
          </div>
        </div>
        <div className='phone-modal-footer'>
          <button className={config.isRTL ? 'send' : 'skip'} onClick={this.props.cancel}>
            <div className='btns-wrap'>
              {config.translations.skip}
              <img src={config.urls.media + 'skip-forward.svg'} />
            </div>
          </button>
          <button className={config.isRTL ? 'skip' : 'send'}
            disabled={!validatePhone(this.state.inputValue)}
            onClick={this.save}>
            <div className='btns-wrap'>
              {this.props.sendlink ? config.translations.send : config.translations.save}
              <img src={config.urls.media + 'save.svg'} />
            </div>
          </button>
        </div>
      </Modal>
    )
  }
}
