import './Menu.css'

const config = window._config
const Menu = () => {
  return (`<div id='menu_modal'><div class='menu_wrap' style="background-image: url(${config.urls.menu_icons}menu-img.svg)"><div class='list-wrap'><div class='menu'><div class='menu-logo'><div class='logo'><img class='business_logo' src=${config.user.business_logo} /></div><p class='business_name'>${config.user.business_name}</p><p class='business_address'><img class='business_address_img' src=${config.urls.menu_icons}map-pin.svg />${config.user.business_address}</p></div><nav class='menu-list'>${config.menu.map((item, key) => { return (`<li class='list-item' key=${key}><a class='item-link' href=${item.link}><img class='menu-img' src=${config.urls.menu_icons + item.icon} alt=${item.text} />${config.translations.menu[item.text]}</a></li>` )})}</nav></div></div></div></div>`)
}

export default Menu