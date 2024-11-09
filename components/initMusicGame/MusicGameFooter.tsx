import React from 'react'
import { View, PixelRatio, Text } from 'react-native'

export default function GameFooter({ footerHeightSize, time }) {
  return (
    <View
      style={{
        height: footerHeightSize,
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          left: PixelRatio.getPixelSizeForLayoutSize(16),
          color: 'white',
        }}
      >
        {`Time: ${time}            Repet: `}
      </Text>
    </View>
  )
}
