import './single-gender.styl'

export const GenderItem = ({ gender, icon, active_icon, type, onSelectGender, gender_text }) => (
  <div className={'gender_item' + (type === gender ? ' selected_gender' : '')} onClick={() => onSelectGender(type)}>
    <div className='avatar_wrap'>
      <img src={config.urls.media + (type === gender ? active_icon : icon)} />
    </div>
    <div className='type_wrap'>
      <p>{gender_text}</p>
      <div className='select' />
    </div>
  </div>
)
