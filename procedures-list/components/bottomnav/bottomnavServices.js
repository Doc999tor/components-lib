export var bottomNavTextTranslationID = {}
export var bottomNavColbecks = {}
export function setBottomNavColbecks(arg) {
  if (arg) {
    bottomNavColbecks = {
      ...arg
    }
  } else {
    bottomNavColbecks = {}
  }
}
