import './Menu.styl'
let temp
if (typeof window !== 'undefined' && typeof config !== 'undefined') {
	temp = config
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	})
	if (config.js_framework === 'preact') {
		try {
			var { h } = require('preact')
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
} else if (typeof window !== 'undefined' && typeof window.config === 'undefined' && typeof config === 'undefined') {
	try {
		const { config } = require('../Home_website/config.js')
		temp = config
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		})
		if (config.js_framework === 'preact') {
			try {
				var { h } = require('preact')
			} catch (error) {
				console.log(error)
			}
		}

	} catch (error) {
		console.log(error)
	}
}
export default ({ closeMenu }) => {
	const bgrImg = {
		'background-image': `url('${temp.urls.menu_icons}photo-bgr.jpg')`
	}
	const cancelPropagation = e => e.stopPropagation()
	return (
		<div id='menu_modal' className='jsx-menu' onClick={closeMenu}>
			<div className='menu_container'>
				<div className='menu_wrap' style={bgrImg}>
					<div className='list-wrap' onClick={cancelPropagation}>
						<div className='menu'>
							<div className='menu-logo'>
								<div className='logo'>
									<img className='business_logo' src={temp.user.business_logo} />
								</div>
								<div className='business_container'>
									<p className='business_name'>{temp.user.business_name}</p>
									<p className='business_address'><img className='business_address_img' src={`${temp.urls.menu_icons}map-pin.svg`} />{temp.user.business_address}</p>
								</div>
							</div>
							<nav className='menu-list'>
								{temp.menu.map(item => {
									return (
										<li className='list-item'>
											<a className='item-link' href={item.link}>
												<span className='menu-img-wrap'><img className='menu-img' src={temp.urls.menu_icons + item.icon} alt={item.text} /></span>
												{temp.translations.menu[item.text]}
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
