import './legal_sms_warning_popup.styl'

export const LegalSmsWarningPopup = ({
  onClosePopup = () => {},
  isActivePopup,
  text,
  continue_label,
  continue_link,
  mediaSrc,
}) => {
  const preventClick = e => e.stopPropagation()
  return (
    <div
      className={
        'legal_warning_popup' + (isActivePopup ? ' hide-background' : '')
      }
      onClick={onClosePopup}
    >
      <div
        className={'legal_warning_body' + (isActivePopup ? ' hide-body' : '')}
        onClick={preventClick}
      >
        <button
          type='button'
          className='close_popup_btn'
          onClick={onClosePopup}
        >
          <img src={`${mediaSrc}ic_close_blue.svg`} />
        </button>
        <div className='legal_warning_info'>
          <img src={`${mediaSrc}ic_paper_plane.svg`} />
          <p className='legal_warning_text'>{text}</p>
          <button
            className='continue_legal_warning_popup'
            type='button'
            onClick={() => {
              location.href = continue_link
            }}
          >
            {continue_label}
          </button>
        </div>
      </div>
    </div>
  )
}
