import './Menu.styl'
if (typeof window !== 'undefined' && typeof config !== 'undefined') {
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
}

export default ({ closeMenu, commonConfig, translations }) => {
	let finalConfig = commonConfig || config
	if (Object.entries(finalConfig.translations).length === 0 && finalConfig.translations.constructor === Object) {
		finalConfig.translations = translations
	}
	const bgrImg = {
		'background-image': `url('${finalConfig.urls.menu_icons}photo-bgr.jpg')`
	}
	const isSvg = finalConfig.user.business_logo.includes('.svg')
	const cancelPropagation = e => e.stopPropagation()
	return (
		<div id='menu_modal' className='jsx-menu' onClick={closeMenu}>
			<div className='menu_container'>
				<div className='menu_wrap' style={bgrImg}>
					<div className='list-wrap' onClick={cancelPropagation}>
						<div className='menu'>
							<div className='menu-logo'>
								<div className={'logo' + (isSvg ? ' svg-logo' : '')}>
									<img className='business_logo' src={finalConfig.user.business_logo} />
								</div>
								<div className='business_container'>
									<p className='business_name'>{finalConfig.user.business_name}</p>
									<p className='business_address'><img className='business_address_img' src={`${finalConfig.urls.menu_icons}map-pin.svg`} />{finalConfig.user.business_address}</p>
								</div>
							</div>
							<nav className='menu-list'>
								{finalConfig.menu.map(item => {
									return (
										item.text === 'install'
											? <li id='install' className='list-item installed' onClick={closeMenu}>
												<p className='item-link'>
													{finalConfig.translations.menu[item.text]}
													<span className='menu-img-wrap'><img className='menu-img' src={finalConfig.urls.menu_icons + item.icon} alt={item.text} /></span>
												</p>
											</li>
											: <li className='list-item'>
												<a className='item-link' href={item.link}>
													{finalConfig.translations.menu[item.text]}
													<span className='menu-img-wrap'><img className='menu-img' src={finalConfig.urls.menu_icons + item.icon} alt={item.text} /></span>
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
