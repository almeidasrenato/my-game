import React from 'react'
import { Dimensions, View, Text, Image, Pressable } from 'react-native'

const returnPxByPercent = (percent, totalValue) => {
  return totalValue * (percent / 100)
}

export default function CircleClick({
  animeLinePosition,
  gameFieldScreenHeightSize,
  AnimationLineTime,
  time,
  CIRCLE_SIZE,
  returnObjectFilter,
  showObjectRef,
  preLoadImageRef,
}) {
  const circleStyle = (positionTop, positionLeft, item) => {
    // let color = '#f2f3f6'
    let color = 'transparent'

    if (item.click) {
      color = 'transparent'
    }

    if (!item.click && item.miss) {
      color = 'transparent'
    }

    return {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      backgroundColor: color,
      position: 'absolute' as const,
      left: returnPxByPercent(
        positionLeft,
        Dimensions.get('screen').width - CIRCLE_SIZE
      ),
      top: positionTop,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
    }
  }

  const actionClick = (lineAndCircle, itemId) => {
    if (lineAndCircle) {
      let newClickObject = showObjectRef.map((itemT) => {
        if (itemT.id === itemId) {
          itemT.click = true
          return { ...itemT }
        }
        return { ...itemT }
      })

      showObjectRef.current = newClickObject
    }
  }

  const lineAndCircle = (positionLineByCircleClick, positionTopReturn) => {
    //? Aqui verifica se a linha está no range campo clicavel ou não
    if (
      positionLineByCircleClick - CIRCLE_SIZE <= positionTopReturn &&
      positionLineByCircleClick >= positionTopReturn
    ) {
      return true
    }

    return false
  }

  return returnObjectFilter.map((item, index) => {
    let newGameFieldScreenHeightSize = gameFieldScreenHeightSize - CIRCLE_SIZE

    newGameFieldScreenHeightSize =
      newGameFieldScreenHeightSize / AnimationLineTime

    newGameFieldScreenHeightSize =
      newGameFieldScreenHeightSize * (item.show % AnimationLineTime)

    let verifyLinePositionX = item.show / AnimationLineTime

    verifyLinePositionX = Math.floor(verifyLinePositionX)

    if (verifyLinePositionX % 2 != 0) {
      newGameFieldScreenHeightSize =
        gameFieldScreenHeightSize - CIRCLE_SIZE - newGameFieldScreenHeightSize
    }

    let positionTopReturn = newGameFieldScreenHeightSize

    let lineAndCircleReturn = lineAndCircle(
      animeLinePosition,
      positionTopReturn
    )

    if (time >= item.show - AnimationLineTime + AnimationLineTime * 1.25) {
      let updateObjectRef = showObjectRef.map((itemT) => {
        if (itemT.id === item.id) {
          itemT.miss = true
          return { ...itemT }
        }
        return { ...itemT }
      })

      showObjectRef.current = updateObjectRef
    }

    if (item.miss && !item.click) {
      return (
        <View
          key={index}
          style={circleStyle(positionTopReturn, item.positionLeft, item)}
        >
          <>
            <Text
              style={{
                color: 'red',
              }}
            >
              Miss
            </Text>
          </>
        </View>
      )
    }

    if (item.click) {
      return (
        <View
          key={index}
          style={circleStyle(positionTopReturn, item.positionLeft, item)}
        >
          <>
            <Text
              style={{
                color: 'green',
              }}
            >
              Hit
            </Text>
          </>
        </View>
      )
    }

    const totalFrames = 60

    const timeUntilNote =
      item.show - AnimationLineTime + AnimationLineTime * 1.25 - time

    const frameIndex = Math.max(
      0,
      Math.min(
        totalFrames - 1,
        Math.floor((timeUntilNote / AnimationLineTime) * totalFrames)
      )
    )

    const reversedFrameIndex = totalFrames - 1 - frameIndex

    return (
      <View
        key={index}
        onTouchStart={() => {
          if (item.click) return
          if (item.miss) return

          actionClick(lineAndCircleReturn, item.id)
        }}
        style={circleStyle(positionTopReturn, item.positionLeft, item)}
      >
        {preLoadImageRef.current.press.load[reversedFrameIndex]({
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
        })}
      </View>
    )
  })
}
