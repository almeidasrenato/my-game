import React from 'react'
import { Dimensions, View, Text, Image, Pressable } from 'react-native'
// import FastImage from '@d11/react-native-fast-image'

const returnPxByPercent = (percent, totalValue) => {
  return totalValue * (percent / 100)
}

export default function SlideClick({
  animeLinePosition,
  gameFieldScreenHeightSize,
  AnimationLineTime,
  time,
  CIRCLE_SIZE,
  returnObjectFilter,
  showObjectRef,
  preLoadImageRef,
}) {
  const [touchStart, setTouchStart] = React.useState({ x: 0, y: 0 })

  const handleSwipe = (endX, endY, itemId, lineAndCircleReturn) => {
    const diffX = endX - touchStart.x
    const diffY = endY - touchStart.y

    const SWIPE_THRESHOLD = 50

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > SWIPE_THRESHOLD) {
        const direction = diffX > 0 ? 'direita' : 'esquerda'
        console.log(`Usuário deslizou para ${direction}`)
        actionClick(lineAndCircleReturn, itemId)
      }
    }
  }

  const circleStyle = (positionTop, positionLeft, item) => {
    let color = 'red'
    // let color = 'transparent'

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

      justifyContent: 'center',
      alignItems: 'center',
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

    return (
      <View
        key={index}
        onTouchStart={(e) => {
          if (item.click || item.miss) return
          setTouchStart({
            x: e.nativeEvent.pageX,
            y: e.nativeEvent.pageY,
          })
        }}
        onTouchEnd={(e) => {
          if (item.click || item.miss) return
          handleSwipe(
            e.nativeEvent.pageX,
            e.nativeEvent.pageY,
            item.id,
            lineAndCircleReturn
          )
        }}
        style={circleStyle(positionTopReturn, item.positionLeft, item)}
      >
        {/* {preLoadImageRef.current.circle.load[reversedFrameIndex]({
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
        })} */}
      </View>
    )
  })
}
