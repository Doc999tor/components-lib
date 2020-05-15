import { default as getOrientation } from 'project-components/getOrientation.js'
export default (photo, bar) => {
  let img = new Image()
  getOrientation(photo, or => {
    let reader = new FileReader()
    reader.readAsDataURL(photo)
    reader.onload = () => { img.src = reader.result }
    img.onload = () => {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      let w = img.width
      let h = img.height
      if (w > config.data.max_side || h > config.data.max_side) {
        if (w > h) {
          if (w > config.data.max_side) {
            h = (h * config.data.max_side) / w
            w = config.data.max_side
          }
        } else {
          if (h > config.data.max_side) {
            w = (w * config.data.max_side) / h
            h = config.data.max_side
          }
        }
      }
      if (or > 4 && or < 9) {
        canvas.width = h
        canvas.height = w
      } else {
        canvas.width = w
        canvas.height = h
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      let dataURL = canvas.toDataURL('image/jpeg', 0.8)
      bar(dataURL)
    }
  })
}
