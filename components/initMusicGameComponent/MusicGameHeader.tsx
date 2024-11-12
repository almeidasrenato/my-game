import React from 'react'
import { View, PixelRatio, Pressable } from 'react-native'

export default function GameHeader({
  startAnimated,
  onChangeStartAnimated,
  // startAnimationFunction,
  headerHeightSize,
  onClickReset,
  setTime,
}) {
  const buttonPause = () => {
    setTime(0)

    if (startAnimated) {
      // startAnimationFunction(true)
      onClickReset(true)
    } else {
      // startAnimationFunction()
      onClickReset(false)
    }

    onChangeStartAnimated((currentValue) => !currentValue)
  }

  return (
    <View
      style={{
        height: headerHeightSize,
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Pressable
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(8),
          width: PixelRatio.getPixelSizeForLayoutSize(8),
          backgroundColor: 'red',
          left: PixelRatio.getPixelSizeForLayoutSize(16),
        }}
        onPress={() => {
          buttonPause()
        }}
      ></Pressable>
    </View>
  )
}
