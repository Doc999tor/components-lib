import './warning_popup.styl'

const WarningPopup = ({
  onCloseWarningPopup = () => {},
  isActivePopup,
  cancel_label,
  mediaSrc,
  text
}) => {
  const preventClick = e => e.stopPropagation()
  return (
    <div className={'warning_popup' + (isActivePopup ? ' hide-background' : '')} onClick={onCloseWarningPopup}>
      <div className={'warning_body' + (isActivePopup ? ' hide-body' : '')} onClick={preventClick}>
        <button type='button' className='close_popup_btn' onClick={onCloseWarningPopup}>
          <img src={`${mediaSrc}ic_close_blue.svg`} />
        </button>
        <div className='warning_info'>
          <div className='common_circle'>
            <img src={`${mediaSrc}ic_sms_warning.svg`} />
          </div>
          <p className='warning_text'>
            {text}
          </p>
          <button className='cancel_warning_popup' type='button' onClick={onCloseWarningPopup}>
            {cancel_label}
          </button>
        </div>
      </div>
    </div>
  )
}

export default WarningPopup
