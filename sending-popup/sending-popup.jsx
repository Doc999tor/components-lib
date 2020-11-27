import './sending-popup.styl'

const SendingPopup = ({
  sendingPopup,
  isActivePopup,
  sending_label,
  success_label,
}) => {
  return (
    <div className={'sending_popup' + (isActivePopup ? ' hide-background' : '')}>
      <div className={'sending_body' + (isActivePopup ? ' hide-body' : '')}>
        {sendingPopup
          ? <div className='sending'>
            <img className='plane' src={config.urls.media + 'ic_paper_plane.svg'} />
            <p>{sending_label}</p>
          </div>
          : <div className='success'>
            <div className='outer_circle'>
              <img className='mark_modal' src={config.urls.media + 'ic_send_success.svg'} />
            </div>
            <p>{success_label}</p>
          </div>}
      </div>
    </div>
  )
}

export default SendingPopup
