import { PixelRatio, Dimensions } from 'react-native'

const returnPxByPercent = (percent, totalValue) => {
  return totalValue * (percent / 100)
}

//* Time
const ANIMATION_LINE_TIME = 1000

//* Sizes
const CIRCLE_SIZE = PixelRatio.getPixelSizeForLayoutSize(36)
const SCREEN_HEIGHT_SIZE = Dimensions.get('screen').height
const HEADER_HEIGHT_SIZE = PixelRatio.getPixelSizeForLayoutSize(14)
const FOOTER_HEIGHT_SIZE = PixelRatio.getPixelSizeForLayoutSize(8)
const LINE_HEIGHT_SIZE = PixelRatio.getPixelSizeForLayoutSize(1)
const PADDING_LINE_ANIMATION = PixelRatio.getPixelSizeForLayoutSize(10)

//* Colors
const FIELD_BACKGROUND = '#253238'
const GAME_BACKGROUND_COLOR = '#2b2732'
// const GAME_BACKGROUND_COLOR = '#fff'
const LINE_COLOR = '#8fbfb8'

//* Calculations
const LINE_HEIGHT_SCREEN_SIZE = SCREEN_HEIGHT_SIZE - LINE_HEIGHT_SIZE
const GAME_FIELD_SCREEN_HEIGHT_SIZE =
  SCREEN_HEIGHT_SIZE - HEADER_HEIGHT_SIZE - FOOTER_HEIGHT_SIZE
const ANIME_LINE_POSITION_MAX_HEIGHT =
  returnPxByPercent(100, LINE_HEIGHT_SCREEN_SIZE) -
  PADDING_LINE_ANIMATION -
  FOOTER_HEIGHT_SIZE -
  HEADER_HEIGHT_SIZE

export {
  ANIMATION_LINE_TIME,
  CIRCLE_SIZE,
  SCREEN_HEIGHT_SIZE,
  HEADER_HEIGHT_SIZE,
  FOOTER_HEIGHT_SIZE,
  LINE_HEIGHT_SIZE,
  LINE_HEIGHT_SCREEN_SIZE,
  PADDING_LINE_ANIMATION,
  FIELD_BACKGROUND,
  GAME_BACKGROUND_COLOR,
  LINE_COLOR,
  GAME_FIELD_SCREEN_HEIGHT_SIZE,
  ANIME_LINE_POSITION_MAX_HEIGHT,
}
