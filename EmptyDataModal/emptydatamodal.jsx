import { Modal } from 'project-components'
import './emptydatamodal.styl'

export default class EmptyDataModal extends React.Component {
  static propTypes = {
    closeMenu: PropTypes.func.isRequired
  }

  render () {
    return (
      <Modal show={this.props.show}>
        <div className='modal-empty-name'>
          <label>{this.props.text.btn_text}</label>
        </div>
        <div className='modal-empty-name-footer'>
          <button onClick={this.props.onHide} className='no-btn'>{this.props.text.agree}</button>
        </div>
      </Modal>
    )
  }
}