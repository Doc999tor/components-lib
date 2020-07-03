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

export default ({ closeMenu, commonConfig, translations, closeAnimation }) => {
	let finalConfig = commonConfig || config
	if (Object.entries(finalConfig.translations).length === 0 && finalConfig.translations.constructor === Object) {
		finalConfig.translations = translations
	}
	const cancelPropagation = e => e.stopPropagation()
	const rtlDir = finalConfig.isRTL || (finalConfig.data && finalConfig.data.isRTL) || (finalConfig.calendar && finalConfig.calendar.isRTL)

	return (
		<div id='menu_modal' className='jsx-menu' onClick={closeMenu || false}>
			<div className='menu_container'>
				<div className={'menu_wrap' + (rtlDir ? ' animation_rtl' : ' animation_ltr') + (closeAnimation ? (rtlDir ? ' close_animation_rtl' : ' close_animation_ltr') : '')}>
					<div className='list-wrap' onClick={closeMenu ? cancelPropagation : false}>
						<div className='menu'>
							<div className='menu-logo'>
								<div className='top-background'>
									<img src={finalConfig.urls.menu_icons + 'wave_menu.svg'} alt='wave' />
								</div>
								<div className='logo'>
									<img className='business_logo' src={finalConfig.urls.menu_icons + 'lista.svg'} alt='lista' />
								</div>
								<div className='business_container'>
									<div className='neon-light'>
										<div className='logo_wrap'>
											<img className='app-logo' src={`${finalConfig.urls.menu_icons}logo.svg`} alt='logo' />
										</div>
									</div>
								</div>
							</div>
							<nav className='menu-list'>
								{finalConfig.menu.map(item => {
									return (
										item.text === 'install'
											? <li id='install' className='list-item installed' onClick={closeMenu || false}>
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
