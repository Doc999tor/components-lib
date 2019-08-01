import { default as Modal } from 'project-components/Modal/Modal.jsx'
// import './incorrectMail.styl'

export default class IncorrectPhone extends React.Component {
  static propTypes = {
    closeMenu: PropTypes.func.isRequired
  }

  render () {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className='modal-incorrect-phone'>
          <img className='modal-icon' src={config.urls.media + 'alert-octagon.svg'} />
          <label>{config.translations.personal_info_editing.title_incorrect_phone}</label>
        </div>
        <div className='modal-incorrect-phone-footer'>
          <button onClick={this.props.onHide} className='no-btn'>{config.translations.personal_info_editing.agree}</button>
        </div>
      </Modal>
    )
  }
}