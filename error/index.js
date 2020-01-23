import './error.styl'
let commonConfig
if (typeof window !== 'undefined' && typeof config !== 'undefined') {
	commonConfig = config
	if (!window.React) {
		try {
			var { h } = require('preact')
		} catch (error) {
			console.log(error)
		}
	}
} else if (typeof window !== 'undefined' && typeof window.config === 'undefined' && typeof config === 'undefined') {
	try {
		const { config } = require('../../components-lib/Home_website/config_ssr.js')
		commonConfig = config
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

export default ({ referer }) => {
	return (
		<div id='error' class='error' >
			<div className='error_wrap'>
				<div className='error_top_section'>
					<div className='error_title error_height'>
						<h2 >{commonConfig.translations.error_page.title}</h2>
						<p>{commonConfig.translations.error_page.text}</p>
					</div>
					<div class='error_background_top'>
						<img class={commonConfig.isRTL ? `scale static_bg_rtl` : 'static_bg'} src={commonConfig.urls.media + 'bg_top.svg'} alt='background' />
						<img class={commonConfig.isRTL ? 'error_outer_rtl' : 'error_outer_ltr'} src={commonConfig.urls.media + 'ill_robot.svg'} alt='robot' />
						<img class={commonConfig.isRTL ? 'question_rtl' : 'question_ltr'} src={commonConfig.urls.media + 'question.svg'} alt='question image' />
						<img class={commonConfig.isRTL ? 'robot_shadow_rtl self_shadow' : 'robot_shadow_ltr self_shadow'} src={commonConfig.urls.media + 'robot_shadow.svg'} alt='robot_shadow image' />
					</div>
				</div>
				<div class='error_background_bottom'>
					<a class={`error_button to_home`} href={commonConfig.baseUrl}><span><img src={commonConfig.urls.media + 'ic_home.svg'} alt={commonConfig.translations.error_page.home_btn} /></span>{commonConfig.translations.error_page.home_btn}</a>
					<a class='error_button' href={commonConfig.urls.support}><span><img src={commonConfig.urls.media + 'ic_support.svg'} alt={commonConfig.translations.error_page.support_btn} /></span>{commonConfig.translations.error_page.support_btn}</a>
					<a class='error_button' href={commonConfig.urls.signup}><span><img src={commonConfig.urls.media + 'ic_join.svg'} alt={commonConfig.translations.error_page.join_btn} /></span>{commonConfig.translations.error_page.join_btn}</a>
				</div>
			</div>
		</div>
	)
}
