import './Menu.styl'

if (config.js_framework === 'preact') {
  try {
    const { h } = require('preact')
  } catch (error) {
    console.log(error)
  }
} else if (config.js_framework === 'vanilla') {
  try {
    const jsxRender = require('jsx-render')
    const dom = jsxRender.default
  } catch (error) {
    console.log(error)
  }
}
export default ({ closeMenu, isActive }) => {
  const bgrImg = {
    'background-image': `url('${config.urls.menu_icons}photo-bgr.jpg')`
  }
  const cancelPropagation = e => e.stopPropagation()
  return (
    <div id='menu_modal' className={isActive ? '' : 'jsx-menu'} onClick={closeMenu}>
      <div className='menu_container'>
        <div className='menu_wrap' style={bgrImg}>
          <div className='list-wrap' onClick={cancelPropagation}>
            <div className='menu'>
              <div className='menu-logo'>
                <div className='logo'>
                  <img className='business_logo' src={config.user.business_logo} />
                </div>
                <div className='business_container'>
                  <p className='business_name'>{config.user.business_name}</p>
                  <p className='business_address'><img className='business_address_img' src={`${config.urls.menu_icons}map-pin.svg`} />{config.user.business_address}</p>
                </div>
              </div>
              <nav className='menu-list'>
                {config.menu.map(item => {
                  return (
                    item.text === 'download'
                      ? <li className='list-item install installed' onClick={closeMenu}>
                        <p className='item-link'>
                          <span className='menu-img-wrap'><img className='menu-img' src={config.urls.menu_icons + 'download.svg'} alt='download' /></span>
                          {config.translations.menu[item.text]}
                        </p>
                      </li>
                      : <li className='list-item'>
                        <a className='item-link' href={item.link}>
                          <span className='menu-img-wrap'><img className='menu-img' src={config.urls.menu_icons + item.icon} alt={item.text} /></span>
                          {config.translations.menu[item.text]}
                        </a>
                      </li>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
