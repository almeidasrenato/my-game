import React from 'react'
import { Dimensions, View, Text } from 'react-native'

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
}) {
  const circleStyle = (positionTop, positionLeft, item) => {
    let color = '#f2f3f6'

    if (item.click) {
      color = 'transparent'
    }

    if (!item.click && item.miss) {
      // color = 'pink'
      color = 'transparent'
    }

    return {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      backgroundColor: color,
      position: 'absolute',
      left: returnPxByPercent(
        positionLeft,
        Dimensions.get('screen').width - CIRCLE_SIZE
      ),
      top: positionTop,
      borderRadius: '500px',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  const actionClick = (lineAndCircle, itemId) => {
    console.log('actionClick itemId ======>', itemId)
    console.log('actionClick lineAndCircle ======>', lineAndCircle)

    if (lineAndCircle) {
      let newTeste = showObjectRef.map((itemT) => {
        if (itemT.id === itemId) {
          itemT.click = true
          return { ...itemT }
        }
        return { ...itemT }
      })

      showObjectRef.current = newTeste
    }
  }

  const lineAndCircle = (positionLineByCircleClick, positionTopReturn) => {
    //! Aqui verifica se a linha está no range campo clicavel ou não
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

    verifyLinePositionX = parseInt(verifyLinePositionX)

    if (verifyLinePositionX % 2 != 0) {
      newGameFieldScreenHeightSize =
        gameFieldScreenHeightSize - CIRCLE_SIZE - newGameFieldScreenHeightSize
    }

    let positionTopReturn = newGameFieldScreenHeightSize

    let lineAndCircleReturn = lineAndCircle(
      animeLinePosition,
      positionTopReturn
    )

    let tolerancePercent = 10 / 100

    if (time >= item.show + tolerancePercent * AnimationLineTime) {
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
        onTouchStart={() => {
          if (item.click) return
          if (item.miss) return

          actionClick(lineAndCircleReturn, item.id)
        }}
        // onTouchStart={() => {
        //   console.log('onTouchStart')
        // }}
        // onTouchEnd={() => {
        //   console.log('onTouchEnd')
        // }}
        style={circleStyle(positionTopReturn, item.positionLeft, item)}
      >
        <></>
      </View>
    )

    //!---------------------------
  })
}
