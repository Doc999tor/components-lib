import { default as Modal } from 'project-components/Modal/Modal.jsx'
import './emptydatamodal.styl'

export default class EmptyDataModal extends React.Component {
  static propTypes = {
    closeMenu: PropTypes.func.isRequired
  }

  render () {
    return (
      <Modal show={this.props.show}>
        <div className='modal-empty-name'>
          <img className='modal-icon' src={config.urls.media + 'alert-octagon.svg'} />
          <label>{this.props.text.title_modal}</label>
        </div>
        <div className='modal-empty-name-footer'>
          <button onClick={this.props.onHide} className='no-btn'>{this.props.text.agree_btn}</button>
        </div>
      </Modal>
    )
  }
}