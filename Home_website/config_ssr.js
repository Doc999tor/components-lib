export const configFn = (lang = 'en') => {
	return {
		baseUrl: `/${ lang }/home`,
		js_framework: 'preact',
		locale: lang,
		isRTL: lang === 'he',
		navigation: {
			hero: { icon: 'ic_smartphone.svg', link: '#hero' },
			features: { icon: 'ic_features.svg', link: '#features' },
			business_types: { icon: 'ic_business.svg', link: '#business_types' },
			showcases: { link: '#showcases' },
			pricing: { icon: 'ic_pricing.svg', link: '#pricing' },
			feedback: { icon: 'ic_reviews.svg', link: '#feedback' }
		},
		user: {
			// admin, senior, junior, readonly, untrusted
			business_logo: 'public/business_data/1/logo.jpg',
			business_name: 'Beauty and cosmetics salons',
			business_address: '11301 West Olympic Boulevard, Apt.100',
			permission_level: 'admin',
			business_id: 123,
			worker_id: 1
		},
		menu_mobile: [
			{ name: 'about_us', link: `/${lang}/about_us` },
			{ name: 'contact_us', link: `/${lang}/contact_us` },
			{ name: 'faq', link: `/${lang}/faq`},
			{ name: 'terms_of_use', link: `/${lang}/terms_of_use` }
		],
		menu: [
			{ text: 'calendar', link: `/${lang}/calendar`, icon: 'calendar.jpg' },
			{ text: 'clients_list', link: `/${lang}/clients_list`, icon: 'clients_list.jpg' },
			{ text: 'reminders', link: `/${lang}/reminders`, icon: 'reminders.jpg' },
			{ text: 'groups', link: `/${lang}/groups`, icon: 'groups.jpg' },
			{ text: 'services', link: `/${lang}/services`, icon: 'services.jpg' },
			{ text: 'support', link: `/${lang}/support`, icon: 'support.jpg' },
			{ text: 'suggest_feature', link: `/${lang}/suggest_feature`, icon: 'suggest_feature.jpg' },
			{ text: 'reminders', link: `/${lang}/reminders`, icon: 'reminders.jpg' },
			{ text: 'groups', link: `/${lang}/groups`, icon: 'groups.jpg' },
			{ text: 'services', link: `/${lang}/services`, icon: 'services.jpg' },
			{ text: 'support', link: `/${lang}/support`, icon: 'support.jpg' },
			{ text: 'suggest_feature', link: `/${lang}/suggest_feature`, icon: 'suggest_feature.jpg' },
			{ text: 'rate_us', link: `/${lang}/rate_us`, icon: 'rate_us.jpg' },
			{ text: 'logout', link: `/${lang}/logout`, icon: 'logout.jpg' }
		],
		modules: {
			hero: {
				features: ['management', 'reminders', 'notifications'],
				gallery: ['screen', 'screen1', 'screen2', 'screen3', 'screen4'],
				carousel_time: 3000,
			},
			features: {
				data: [
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'subscriptions',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_bell.svg'
					},
					{
						name: 'appointments',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_client.svg'
					},
					{
						name: 'management',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_gallery.svg'
					},
					{
						name: 'notifications',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_sms.svg'
					},
					{
						name: 'reminders',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_client_classify.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_calendar.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_gallery.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_gallery.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_gallery.svg'
					},
					{
						name: 'business',
						preview_pic: 'pic_iphone.png',
						icon: 'ic_gallery.svg'
					}
				]
			},
			showcases: {
				phones_pics: ['screen', 'screen1', 'screen3', 'screen4']
			},
			business_types: {
				internal_link: {
					name: 'business_types',
					url: 'business_types'
				},
				data: [
					{
						name: 'hair_salons',
						icon: 'pic_mask'
					},
					{
						name: 'nail_and_makeup_artists',
						icon: 'nail_and_makeup_artists'
					},
					{
						name: 'installers_and_technicians',
						icon: 'installers_and_technicians'
					},
					{
						name: 'cosmetics',
						icon: 'cosmetics'
					},
					{
						name: 'massage_centers',
						icon: 'massage_centers'
					}
				]
			},
			feedback: {
				data: [
					{
						id: 1,
						customer_name: 'Mary Hall',
						rating: 3,
						picture: '1.jpg',  // picture will render jpg and webp
						picture_web: '1.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					},
					{
						id: 2,
						customer_name: 'Emilia Clark',
						rating: 5,
						picture: 'avatar.png',  // picture will render jpg and webp
						picture_web: '2.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					},
					{
						id: 3,
						customer_name: 'Scarlett Johansson',
						rating: 5,
						picture: 'avatar.png',  // picture will render jpg and webp
						picture_web: '3.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					},
					{
						id: 4,
						customer_name: 'Mary Hall',
						rating: 5,
						picture: '',  // picture will render jpg and webp
						picture_web: '1.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					},
					{
						id: 5,
						customer_name: 'Mary Hall',
						rating: 5,
						picture: 'avatar.png',  // picture will render jpg and webp
						picture_web: '1.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					},
					{
						id: 6,
						customer_name: 'Mary Hall',
						rating: 5,
						picture: 'avatar.png',  // picture will render jpg and webp
						picture_web: '1.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					},
					{
						id: 7,
						customer_name: 'Mary Hall',
						rating: 5,
						picture: 'avatar.png',  // picture will render jpg and webp
						picture_web: '1.webp',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
					}
				]
			},
			pricing: {
				currency: '$',
				data: [
					{ name: 'basic', icon: 'basic.svg', price_monthly: null, price_yearly: null },
					{ name: 'premium', icon: 'premium.svg', price_monthly: 10, price_yearly: 100 },
					{ name: 'ultimate', icon: 'ultimate.svg', price_monthly: 19, price_yearly: 190 }
				]
			},
			contact_us: {
				phone_number: '+972 55 966 5243',
				email: 'client@lista.com',
				data: [
					{ name: 'whatsapp', icon: 'ic_whatsapp.svg', url: 'https://chat.whatsapp.com/JvjzpJsamYmE65m95lkmGz', color: '#e5f8e9', color_text: '#55cd6c' },
					{ name: 'viber', icon: 'ic_viber.svg', url: 'https://invite.viber.com/?g2=AQAaEITkv4zPmUsWCDPJdalyyNyjPJD7M4IGjUWirJBlGgOrzsgVMWB6Q1gw3jHx', color: '#ede7ff', color_text: '#845ffa' },
					{ name: 'messenger', icon: 'ic_messenger.svg', url: 'https://m.me/join/AbbDIHCbzcIo2u-R', color: '#e7f7ff', color_text: '#2998ff' },
					{ name: 'telegram', icon: 'ic_telegram.svg', url: 'https://t.me/TestAtzmaim', color: '#e7f7ff', color_text: '#12aef1' }
				]
			},
			footer: {
				data: [
					{ name: 'about_us', link: `/${lang}/about_us` },
					{ name: 'contact_us', link: `/${lang}/contact_us` },
					{ name: 'terms_of_use', link: `/${lang}/terms_of_use` }
				]
			}
		},
		urls: {
			social_networks: [
				{ name: 'twitter', url: 'https://twitter.com', icon: 'ic_twitter.svg' },
				{ name: 'facebook', url: 'https://facebook.com', icon: 'ic_facebook.svg' },
				{ name: 'instagram', url: 'https://instagram.com', icon: 'ic_instagram.svg' },
				{ name: 'youtube', url: 'https://youtube.com', icon: 'ic_youtube.svg' }
			],
			menu_icons: './assets/menu/',
			login: `/${ lang }/login`,
			signup: `/${ lang }/signup`,
			contact_us: `/${ lang }/home?page=contact_us`,
			error_page: `/${ lang }/home?page=error`,
			home_page: '/{lang}/home',
			send_mail: 'https://api.bewebmaster.co.il/home/contact_us',
			old_website: '/text_website.html',
			hero_gallery: './components-lib/Home_website/gallery/',
			media: './assets/media/',
			media_clients: './assets/clients/',
			media_logo: './components-lib/Home_website/logo/',
			media_features: './components-lib/Home_website/features/',
			media_social_networks: './components-lib/Home_website/social_networks/',
			media_navigation: './assets/navigation/',
			default_path_to_avatar: './assets/clients/',
			default_avatar: 'default_avatar.jpg',
			media_showcases: './assets/media/showcases/',
			hero_carousel: './assets/media/hero_carousel/',
			media_business_types: './components-lib/Home_website/business_types/'
		},
		translations: {}
		}
};
