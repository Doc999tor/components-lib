export default phone => {
  if (phone && phone.length >= 3) {
    const r = /^[\s\d()\-*#+]+$/
    return r.test(phone)
  } else {
    return false
  }
}
