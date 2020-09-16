import './switch.styl'
const SharedSwitch = ({ checked, name = 'shared_swich', onHandleChange = () => {}, inactive = false}) => {
  return (
    <div className='shared-switch-wrap'>
      <input checked={checked} onChange={onHandleChange} disabled={inactive} className='shared_swich' type='checkbox' name={name} />
    </div>
  )
}
export default SharedSwitch
