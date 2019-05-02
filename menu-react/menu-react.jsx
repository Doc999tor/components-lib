import React from 'react'
import './menu-react.css'

const MenuReact = ({isMenuOpen, onHandleMenu}) => {
  return (
    <div id='menu_modal'
      className={isMenuOpen ? 'show' : 'show hide'}
      style={{direction: `${config.data.isRTL ? 'rtl' : 'ltr'}`}}
      // close menu
      onClick={() => onHandleMenu()}>
      <div className='menu_wrap'>
        <div className='list-wrap'>
          <div className='menu'>
            <div className='menu-logo'>
              <div className='logo'>
                <img className='business_logo' src={config.user.business_logo} />
              </div>
              <p className='business_name'>{config.user.business_name}</p>
              <p className='business_address'>
                <img className='business_address_img' src={`${config.urls.menu_icons}map-pin.svg`} />
                {config.user.business_address}
              </p>
            </div>
            <nav className='menu-list'>{config.menu.map((item, key) => {
              return (<li className='list-item' key={key}>
                <a className='item-link' href={item.link}>
                  <img className='menu-img' src={config.urls.menu_icons + item.icon} alt={item.text} />
                  {config.translations.menu[item.text]}
                </a></li>)
            })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuReact
