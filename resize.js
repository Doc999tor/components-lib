import { default as getOrientation } from 'project-components/getOrientation.js'
const max_side = config.data.max_side || 1000
export default (photo, callback, highresPhotos = false) => {
  let img = new Image()
  getOrientation(photo, srcOrientation => {
    let reader = new FileReader()
    reader.readAsDataURL(photo)
    reader.onload = () => { img.src = reader.result }
    img.onload = () => {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      let width = img.width
      let height = img.height
      let userAgent = navigator.userAgent.toLowerCase()
      let SamsungBrowser = /samsungbrowser/.test(userAgent)
      if (!highresPhotos && (width > max_side || height > max_side)) {
        if (width > height) {
          if (width > max_side) {
            height = (height * max_side) / width
            width = max_side
          }
        } else {
          if (height > max_side) {
            width = (width * max_side) / height
            height = max_side
          }
        }
      }
      if (4 < srcOrientation && srcOrientation < 9 && userAgent && SamsungBrowser) {
        canvas.width = height
        canvas.height = width
      } else {
        canvas.width = width
        canvas.height = height
      }
      if (userAgent && SamsungBrowser) {
        switch (srcOrientation) {
        case 2: ctx.transform(-1, 0, 0, 1, width, 0); break
        case 3: ctx.transform(-1, 0, 0, -1, width, height); break
        case 4: ctx.transform(1, 0, 0, -1, 0, height); break
        case 5: ctx.transform(0, 1, 1, 0, 0, 0); break
        case 6: ctx.transform(0, 1, -1, 0, height, 0); break
        case 7: ctx.transform(0, -1, -1, 0, height, width); break
        case 8: ctx.transform(0, -1, 1, 0, 0, width); break
        default: break
        }
      }
      ctx.drawImage(img, 0, 0, width, height)
      let dataURL = highresPhotos ? canvas.toDataURL('image/jpeg', 0.8) : canvas.toDataURL('image/jpeg', 0.6)
      callback(dataURL)
    }
  })
}
