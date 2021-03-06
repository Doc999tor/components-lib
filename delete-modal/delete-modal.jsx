import './delete-modal.styl'

const DeleteModal = ({
  onCloseDeleteClientsModal,
  onConfirmDeleteClients,
  closeDelete,
  confirmText,
  staticImg,
  modalTitle,
  cancelText,
  modalText
}) => {
  const stopClick = e => e.stopPropagation()
  return (
    <div className={'deletePopup' + (closeDelete ? ' bgr_animation' : '')} onClick={onCloseDeleteClientsModal}>
      <div className={'confirm-block' + (closeDelete ? ' confirm-block-hide' : '')} onClick={stopClick}>
        <div className='modal-body'>
          <p className='delete_title'>{modalTitle}</p>
          <p className='text'>{modalText}</p>
          <div className='delete_icon'>
            <img className='icon' src={(staticImg || config.urls.base_clients_list_data) + 'ic_delete_popup.svg'} />
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={onCloseDeleteClientsModal} className='no-btn'><img className='cancel-img' src={(staticImg || config.urls.base_clients_list_data) + 'ic_cancel_popup.svg'} />{cancelText}</button>
          <button onClick={onConfirmDeleteClients} className='yes-btn'><img src={(staticImg || config.urls.base_clients_list_data) + 'ic_delete.svg'} />{confirmText}</button>
        </div>
      </div>
    </div>
  )
}
export default DeleteModal
