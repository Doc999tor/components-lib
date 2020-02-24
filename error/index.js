import './error.styl'
if (typeof window !== 'undefined' && typeof config !== 'undefined') {
	if (!window.React) {
		try {
			var { h } = require('preact')
		} catch (error) {
			console.log(error)
		}
	}
}

export default ({ referer, commonConfig, translations }) => {
	let finalConfig = commonConfig || config
	if (Object.entries(finalConfig.translations).length === 0 && finalConfig.translations.constructor === Object) {
		finalConfig.translations = translations
	}
	return (
		<div id='error' class='error' >
			<div className='error_wrap'>
				<div className='error_top_section'>
					<div className='error_title error_height'>
						<h2 >{ finalConfig.translations.error_page.title }</h2>
						<p>{ finalConfig.translations.error_page.text }</p>
					</div>
					<div class='error_background_top'>
						<img class={finalConfig.isRTL ? `scale static_bg_rtl` : 'static_bg'} src={finalConfig.urls.media + 'bg_top.svg'} alt='background' />
						<img class={finalConfig.isRTL ? 'error_outer_rtl' : 'error_outer_ltr'} src={finalConfig.urls.media + 'ill_robot.svg'} alt='robot' />
						<img class={finalConfig.isRTL ? 'question_rtl' : 'question_ltr'} src={finalConfig.urls.media + 'question.svg'} alt='question image' />
						<img class={finalConfig.isRTL ? 'robot_shadow_rtl self_shadow' : 'robot_shadow_ltr self_shadow'} src={finalConfig.urls.media + 'robot_shadow.svg'} alt='robot_shadow image' />
					</div>
				</div>
				<div class='error_background_bottom'>
					<a class={`error_button to_home`} href={finalConfig.baseUrl}><span><img src={finalConfig.urls.media + 'ic_home.svg'} alt={finalConfig.translations.error_page.home_btn} /></span>{finalConfig.translations.error_page.home_btn}</a>
					<a class='error_button' href={finalConfig.urls.contact_us}><span><img src={finalConfig.urls.media + 'ic_support.svg'} alt={finalConfig.translations.error_page.support_btn} /></span>{finalConfig.translations.error_page.support_btn}</a>
					<a class='error_button' href={finalConfig.urls.signup}><span><img src={finalConfig.urls.media + 'ic_join.svg'} alt={finalConfig.translations.error_page.join_btn} /></span>{finalConfig.translations.error_page.join_btn}</a>
				</div>
			</div>
		</div>
	)
}
