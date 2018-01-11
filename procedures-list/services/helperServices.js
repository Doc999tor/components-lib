const config = window._config

export function updateQuery(arg) {
  if (this && this.props && this.props.router) {
    const locationPathname = this.props.location.pathname

    Object.keys(arg).forEach((item) => {
      if (!arg[item]) {
        delete this.props.location.query[item]
        delete arg[item]
      }
    })

    this.props.router.push({
      pathname: locationPathname,
      query: {
        ...this.props.location.query,
        ...arg
      }
    })
  } else {
    console.warn(`to use this functionality it is necessary to bind the context on the component [and add withRouter react-router(if child component)]`);
  }
}

export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
      };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
    };
};

export function parmsToObj(str) {
  let data
  let pieces = str.split('&')

  if (pieces) {
    data = {}
    let parts
    for (let i = 0; i < pieces.length; i++) {
      parts = pieces[i].split('=')
      if (parts.length < 2) {
        parts.push('')
      }
      data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
    }
  }

  return data
}
export function hasScrolledToBottom(callback, offset = 0) {

  let _getDocumentHeight = () => {
    return document.documentElement.scrollHeight
  }

  let _getViewportHeight = () => {
    return document.documentElement.clientHeight
  }

  let _getPageYOffset = () => {
    // -1 some freak value
    // document.documentElement.scrollHeight - document.documentElement.clientHeight === window.pageYOffset => false;
    return (window.pageYOffset + 1)
  }

  if (callback) {
    window.onscroll = () => {
      if (_getPageYOffset() >= (_getDocumentHeight() - _getViewportHeight() - offset)) {
        callback()
      }
    }
  } else {
    window.onscroll = null
  }
}

export function serialize(obj) {
  var str = []
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  return str.join('&')
}

export function clearRepetitiveProcedure (el) {
  let arrServices = this.props.stateShared.selectingReminders.services
  if (!arrServices.length) {
    this.props.setServices(el)
  } else {
    let sorted_arr = arrServices.slice().sort()
    const results = []
    for (let i = 0; i < arrServices.length; i++) {
      if (el.id === sorted_arr[i].id) {
        results.push(sorted_arr[i])
      }
    }
    if (!results.length) {
      this.props.setServices(el)
    }
  }
}
// Reminders
export function seconds2time (seconds) {
  var time = ''
  var day = Math.floor(seconds / 86400)
  if (day != 0) {
    time = `${config.translations.remindersTimeService.in} ${day} ${config.translations.remindersTimeService.days} ${config.translations.remindersTimeService.before}`
    // time = config.translations.remindersTimeService.in + ' ' + day + ' ' + config.translations.remindersTimeService.days
  }
  if (day === 1) {
    time = `${config.translations.remindersTimeService.in} ${day} ${config.translations.remindersTimeService.day} ${config.translations.remindersTimeService.before}`
  }
  if (day < 1) {
    time = config.translations.remindersTimeService.less_than_day
  }
  return time
}

//
export function prepeaTime(time) {
  if (time < 60)
    return time + 'm'
  let takenNumber = time % 60
  let numberHours = time / 60
  return parseInt(numberHours) + 'h' + takenNumber + 'm'
}

export function parceTime (arg) {
  if (arg.indexOf('h') != -1 && arg.indexOf('m') != -1) {
    let separateMinutesTime = arg.split('h')
    let takenNumber = (+separateMinutesTime[0].replace(/[^-0-9]/gim, '')) * 60 + (+separateMinutesTime[1].replace(/[^-0-9]/gim, ''))
    this.setState({durationValue: takenNumber, viewDurationValue: this.prepeaTime(takenNumber)})
    // this.handleInput({duration: takenNumber})
  } else if (arg.indexOf('m')) {
    let takenNumber = arg.split('m')[0]
    this.setState({
      durationValue: takenNumber.replace(/[^-0-9]/gim, ''),
      viewDurationValue: this.prepeaTime(takenNumber.replace(/[^-0-9]/gim, ''))
    })
  } else if (arg.indexOf('h') != -1) {
    let numberHours = arg.split('h')[0]
    this.setState({
      durationValue: numberHours * 60,
      viewDurationValue: numberHours.replace(/[^-0-9]/gim, '') + 'h'
    })
    handleInput({
      duration: (numberHours * 60)
    })
  } else {
    this.setState({
      durationValue: arg.replace(/[^-0-9]/gim, ''),
      viewDurationValue: this.prepeaTime(arg.replace(/[^-0-9]/gim, ''))
    })
    handleInput({
      duration: arg.replace(/[^-0-9]/gim, '')
    })
  }
}

export function handleDurationNumber (sign) {
  if (typeof sign === 'number' && (+this.state.durationValue + sign)) {
    this.parceTime((+this.state.durationValue + sign) + 'm')
  }
  if (typeof sign === 'string') {
    this.parceTime(sign)
  }
}

function handleInput (value) {
  this.props.updateProcedure(value)
}
