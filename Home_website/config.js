const lang = 'en'
const config = {
  baseUrl: '',
  js_framework: 'preact',
  locale: lang,
  isRTL: lang === 'he',
  navigation: {
    hero: { icon: 'ic_smartphone.svg', link: '#hero' },
    features: { icon: 'ic_features.svg', link: '#features' },
    business_types: { icon: 'ic_business.svg', link: '#business_types' },
    showcases: { link: '#showcases' },
    contact_us: { link: '#contact_us' },
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
      gallery: [
        {
          picture: 'agenda',
          features: ['management', 'reminders', 'notifications']
        },
        {
          picture: 'preview',
          features: ['management', 'reminders', 'notifications']
        },
        {
          picture: 'calendar',
          features: ['management', 'reminders', 'notifications']
        }
      ],
      carousel_time: 5000,
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
      ],
      carousel_time: 5000
    },
    main_benefit: {
      carousel_time: 5000,
      data: [
        {pic: 'pic1'},
        {pic: 'pic2'},
        {pic: 'pic3'},
        {pic: 'pic4'}
      ],
    },
    showcases: {
      phones_pics: ['screen', 'screen1', 'screen3', 'screen4']
    },
    leads: {},
    business_types_mobile: {},
    business_types: {
      internal_link: {
        name: 'business_types',
        url: 'business_types'
      },
      carousel_time: 5000,
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
      switch_bill_annually: true, // default value for pricig toggle switch
      data: [
        { name: 'basic', icon: 'basic.svg', price_monthly: 'Free', price_yearly: 'Free', discount: '13%', preferred: true },
        { name: 'premium', icon: 'premium.svg', price_monthly: 10, price_yearly: 100, discount: '20%' },
        { name: 'ultimate', icon: 'ultimate.svg', price_monthly: 19, price_yearly: 190, discount: '20%' }
      ]
    },
    no_credits: {

    },
    contact_us: {
      phone_number: '+972 55 966 5243',
      email: 'client@lista.com',
      data: [
        { name: 'whatsapp', icon: 'ic_whatsapp.svg', url: 'https://chat.whatsapp.com/JvjzpJsamYmE65m95lkmGz', color: '#e5f8e9', color_text: '#55cd6c' },
        { name: 'viber', icon: 'ic_viber.svg', url: 'https://invite.viber.com/?g2=AQAaEITkv4zPmUsWCDPJdalyyNyjPJD7M4IGjUWirJBlGgOrzsgVMWB6Q1gw3jHx', color: '#ede7ff', color_text: '#845ffa' },
        { name: 'messenger', icon: 'ic_messenger.svg', url: 'https://m.me/join/AbbDIHCbzcIo2u-R', color: '#e7f7ff', color_text: '#2998ff' },
        { name: 'telegram', icon: 'ic_telegram.svg', url: 'https://t.me/TestAtzmaim', color: '#e7f7ff', color_text: '#12aef1' }
      ],
			useful_links: [
				{ link_to: '/page1' },
				{ link_to: '/page2' },
				{ link_to: '/page3' },
				{ link_to: '/page4' }
			],
    },
    footer: {
      data: [
        { name: 'about_us', link: `/${lang}/about_us`, icon: 'fruit.png'},
        { name: 'contact_us', link: `/${lang}/contact_us, ` },
        { name: 'terms_of_use', link: `/${lang}/terms_of_use`, icon: 'music.png' }
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
    pricing: `/${ lang }/home?page=pricing`,
    error_page: `/${ lang }/home?page=error`,
    home_page: '/{lang}/home',
    send_mail: 'https://api.bewebmaster.co.il/home/contact_us',
    api_leads: 'https://api.bewebmaster.co.il/home/contact_us/leads',
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
    media_business_types: './components-lib/Home_website/business_types/',
    media_benefit: './assets/benefit/',
    page_pricing: '/pricing',
    page_contact_us: '/contact_us',
    page_error: '/error'
  },
  translations: {
    languages: {
      en: 'EN - English',
      ua: 'UA - Ukraine',
      he: 'HE - Hebrew'
    },
    module_names: {
			groups: 'Groups',
			calendar: 'Calendar',
			settings: 'Settings'
		},
    menu: {
      calendar: 'Calendar',
      clients_list: 'Clients list',
      reminders: 'Reminders',
      groups: 'Groups',
      services: 'Services',
      support: 'Support',
      suggest_feature: 'Suggest a feature',
      rate_us: 'Rate us',
      logout: 'Log out'
    },
    menu_mobile: {
      about_us: 'About Us',
      contact_us: 'Contact Us',
      faq: 'FAQ',
      terms_of_use: 'Terms of Use'
    },
    button_contact_us: {
      contact_us: 'Contact Us',
      questions: 'Do you have any questions or suggestions? Let\'s discuss it!'
    },
    menu_footer: {
      about_us: 'About Us',
      contact_us: 'Contact Us',
      terms_of_use: 'Terms of Use'
    },
    error_page: {
      title: 'Oops!',
      text: 'Something went wrong, but we\'re going to fix it! Sorry about that',
      home_btn: 'Back to Homepage',
      support_btn: 'Contact Support',
      join_btn: 'Join Atzmaim Now'
    },
    head: {
      title: 'title',
      description: 'description',
      keywords: 'keywords',
      language: 'en'
    },
    navigation: {
      hero: { name: 'App info' },
      features: { name: 'Features' },
      showcases: { name: 'Showcases' },
      contact_us: { name: 'Contact US' },
      business_types: { name: 'For whom' },
      pricing: { name: 'Pricing' },
      feedback: { name: 'Feedback' }
    },
    hero: {
      main_title: 'Manage Business Easily',
      description: 'We’ve created for you an application with calendar,clients appointments, automated text reminders andother useful tools for managing your business easy',
      logo_label: 'ATZMAIM Logo',
      log_in: 'Log in',
      sign_up: 'Sign Up',
      button_label: 'Try for Free!'
    },
    features: {
      back_to_features: 'Discover all',
      main_title: 'Powerful Features',
      subtitle: 'Atzmaim App for any type of business',
      content: {
        data: {
          business: { name: 'Business Management Business Management', description: 'Voluptate autem unde voluptatum. Enim voluptatem voluptas.' },
          appointments: { name: 'Appointments Calendar Appointments Calendar', description: 'Et voluptate sapiente. Ratione ror praesentium.' },
          notifications: { name: 'SMS Notifications SMS Notifications', description: 'Delectus fugiat voluptatem explicabo atque harum. Quis quae alias consequuntur.' },
          subscriptions: { name: 'Client’s Subscriptions Client’s Subscriptions', description: 'Est perspiciatis veniam. Rerum aspernatur debitis ut deserunt quam aperiam.' },
          management: { name: 'Client’s Management Client’s Management', description: 'Voluptate inventore quia necessitatibus. Vitae et quae quae. Doloribus tenetur sunt et ut.' },
          reminders: { name: 'Tasks and Reminders Tasks and Reminders', description: 'Sint qui et nihil praesentium adipisci tempore. Exercitationem in ut.' }
        }
      }
    },
    main_benefit: {
      content: {
        data: [
          {
            title: 'Run Your Business from Your Pocket, with ease and from everywhere',
            text: ' 11 It’s never been easier to organize your busy life. Organize your tasks, lists and reminders in one easy calendar app. Lista syncs seamlessly across all of your devices, making your business management accessible everywhere. Stay organized and get more done! 11',
            alt: 'alt 1'
          },
          {
            title: 'Manage Your Business Easily',
            text: '11It’s never been easier to organize your busy life. Organize your tasks, \/n lists and reminders in one easy calendar app. Lista syncs seamlessly across all of your devices, making your business management accessible everywhere. Stay organized and get more done! 11',
            alt: 'alt 2'
          },
          {
            title: 'All Your Business in One App',
            text: '22אין יותר פספוסים! כל הצעת מחיר, פגישה, תמונה או אפילו הקלטת שיחה – נכנסת לתיק הלקוח בקלו, פגישה, תמונה או אפילו הקלטת שיחה – נכנסת לתיק הלקוחת. Lista תזכור עבורכם הכל: היסטוריית לקוחות, מחירים, חובות, סדרות ומנויים ששולמו מראש, כרטיסי כימיה (למעצבי שיער), תמונות לפני/אחרי,  מעקבים ותזכורות... אחרי שתתחילו לא תבינו איך הסתדרתם בלעדיה. 11',
            alt: 'alt 3'
          },
          {
            title: 'Perfect Solution for Free!',
            text: `Control your day, week and month with 
							calendar events and tasks in a simple 
							view.Lista was carefully designed to meet 
							your needs every single time.It's simple 
							and powerful, just like it should be. 
							Created for business people.`,
            alt: 'alt 4'
          }
        ]
      }
    },
    showcases: {
      phones_pics_alt: ['1111 alt', 'IMG_0923 alt', 'IMG_0923 alt', '1111 alt'],
      main_title: 'Simply the Best Business Calendar',
      description: `Control your day, week and month with 
				calendar events and tasks in a simple 
				view.Lista was carefully designed to meet 
				your needs every single time.It's simple 
				and powerful, just like it should be. 
				Created for business people.`,
      button_label: 'Try for Free!',
    },
    leads: {
      main_title: 'First month - Free! Do you like it?',
      subtitle: 'Fill the form and we’ll sign up you to our free program, without any obligations',
      placeholder_name: 'Your Name',
      placeholder_contact: 'Phone or Email',
      btn_label: 'Send',
      empty_warning_label: 'Fill in this field',
      not_valid_field_label: 'Enter valid value'
    },
    contact_us: {
      main_title: 'Contact Us',
      placeholder_contact: 'Contact details',
      placeholder_message: 'Your Message',
      contact_input_label: 'Email or Phone',
      message_input_label: 'Message',
      attach_file_text: 'Having trouble with an app? Attach a screenshot or a video to show us and we’ll solve it!',
      attach_file_btn_label: 'Attach a file',
      desktop: {
        subtitle: 'Do you have any questions or suggestions? Let’s discuss it!',
        warning_empty_fields: 'Please note that all fields are required.',
        warning_not_valid_contact: 'Please enter a valid email or phone number.',
        choose_messenger: 'We communicate in convenient for you messaging apps. Choose your',
        send_mail_btn_label: 'Send message',
        contact_info_email: 'Email:',
        contact_info_phone: 'Phone:'
      },
      mobile: {
        choose_messenger: 'Choose a messaging app or just call us',
        preview_text: 'FAQ & Tutorials',
        create_mail_btn_label: 'Send Email',
        send_form_title: 'Your Message',
        send_form_cancel_btn_label: 'Cancel',
        send_form_send_btn_label: 'Send'
      },
      send_popup: {
        sending: 'Sending',
        success: 'Your message was successfully sent!'
      },
      data: {
        viber: { name: 'Viber' },
        whatsapp: { name: 'Whatsapp' },
        messenger: { name: 'Messenger' },
        telegram: { name: 'Telegram' }
      },
      useful_links: {
				main_title: 'Useful Links',
				link_label: 'View',
				links: [
					{ title: 'How to record your phone\'s screen? ',text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'  },
					{ title: 'TeamViewer for remote support', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'  },
					{ title: 'How to create a new client?', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'  },
					{ title: 'How to create a new service?', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'  },
				]
			},
    },
    business_types_mobile: {
      main_title: 'Types of Business',
      subtitle: 'Atzmaim App for any type of business'
    },
    business_types: {
      main_title: 'Types of Business',
      subtitle: 'Atzmaim App for any type of business',
      content: {   // * 6 items
        hair_salons: {
          title: 'Hair Stylists and Salons',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
          alt: 'Hair Salons Alt'
        },
        nail_and_makeup_artists: {
          title: 'Makeup Artists',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
          alt: 'nail and makeup artists Alt'
        },
        installers_and_technicians: {
          title: 'Tanning Centers and Spas',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
          alt: 'nail and makeup artists Alt'
        },
        massage_centers: {
          title: 'Sports and Fitness Instructors',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
          alt: 'Massage Centers'
        },
        cosmetics: {
          title: 'Cosmetics and Beauty Therapists',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
          alt: 'Massage Centers'
        }
      }
    },
    feedback: {
      internal_link_name: 'FEEDBACK',
      alt_pic: 'User avatar',
      main_title: 'Customer Feedback',
      subtitle: 'They chose Atzmaim for their business',
      leave_btn_label: 'Leave Feedback',
      upload_photo: 'Upload your photo',
      name_label: 'Full name',
      text_label: 'Write a review',
      cancel_label: 'Cancel',
      submit_label: 'Submit',
      uploaded_photo: 'The photo is uploaded'
    },
    no_credits: {
      main_title: 'First month - Free!',
      subtitle: 'Fill the form and we’ll sign up you to our free program',
      button_label: 'Send',
      placeholder_name: 'Your Name',
      placeholder_contact: 'Your Phone'
    },
    pricing: {
      internal_link_name: 'PRICING',
      main_title: 'Pricing',
      switch_annually: 'Bill annually',
      switch_monthly: 'Bill monthly',
      title: 'Plans for Everyone',
      subtitle: 'Choose the plan and tap to learn more',
      to_save_label: 'Save',
      discount_label: 'off',
      data: {
        basic: {
          small_preview: {
            name: 'Basic',
            business_type: 'Individual',
            group_preview_price: '{price_value}',
            period: ''
          },
          opened_preview: {
            name: 'Basic',
            business_type: 'Small businesses',
            group_preview_price: '{price_value}',
            period_month: '/forever',
            period_year: '/forever',
            price_monthly: '/month',
            price_yearly: '/year',
            features: ['100 Appointments monthly', 'Available on 1 Device', 'Text message reminders', 'Client management', 'Sync with Google Calendar', ],
            cta_label: 'Try for free' // call-to-action, "join us" text
          }
        },
        premium: {
          small_preview: {
            name: 'Premium',
            business_type: 'Small Business',
            group_preview_price: '{currency}{price_value}',
            period: '/month'
          },
          opened_preview: {
            name: 'Premium',
            business_type: 'Decent businesses',
            group_preview_price: '{currency}{price_value}',
            period_month: '/month',
            period_year: '/year',
            price_monthly: 'Bill monthly',
            price_yearly: 'Bill yearly',
            features: ['Unlimited Appointments', 'Available on 2 Devices', 'Text message reminders', 'Client management', 'Sync with Google Calendar', 'Sync across devices', 'Group appoinments', 'Recurring appointments', 'Messages without our branding', 'Priority support', ],
            cta_label: 'Subscribe now' // call-to-action, "join us" text
          }
        },
        ultimate: {
          small_preview: {
            name: 'Ultimate',
            business_type: 'Company',
            group_preview_price: '{currency}{price_value}',
            period: '/month'
          },
          opened_preview: {
            name: 'Ultimate',
            business_type: 'Well based businesses',
            group_preview_price: '{currency}{price_value}',
            period_month: '/month',
            period_year: '/year',
            price_monthly: 'Bill monthly',
            price_yearly: 'Bill yearly',
            features: ['Unlimited Appointments', 'Unlimited Devices', 'Text message reminders', 'Client management', 'Sync with Google Calendar', 'Sync across devices', 'Group appoinments', 'Recurring appointments', 'Messages without our branding', 'Priority support', ],
            cta_label: 'Subscribe now' // call-to-action, "join us" text
          }
        }
      }
    },
    footer: {
      copy_right: '© ' + new Date().getFullYear() + ' Lista. All right reserved',
      old_website: 'old_website',
      social_networks: {
        facebook: 'https://atzma.im/facebook',
        twitter: 'https://atzma.im/twitter',
        instagram: 'https://atzma.im/instagram',
        youtube: 'https://atzma.im/youtube'
      }
    }
  }
}
