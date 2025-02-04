import React from 'react'
import { View, PixelRatio, Pressable, Text } from 'react-native'

export default function GameHeader({
  startAnimated,
  onChangeStartAnimated,
  headerHeightSize,
  onClickReset,
  setTime,
  createMode,
  onChangeCreateMode,
}) {
  const buttonPause = () => {
    setTime(0)

    if (startAnimated) {
      onClickReset(true)
    } else {
      onClickReset(false)
    }

    onChangeStartAnimated((currentValue) => !currentValue)
  }

  return (
    <View
      style={{
        height: headerHeightSize,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
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

      <Pressable
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(8),
          width: PixelRatio.getPixelSizeForLayoutSize(24),
          backgroundColor: 'blue',
          left: PixelRatio.getPixelSizeForLayoutSize(32),

          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          onChangeCreateMode((currentValue: boolean) => !currentValue)
        }}
      >
        <Text>{createMode ? 'EditMode' : 'PlayMode'}</Text>
      </Pressable>
    </View>
  )
}
