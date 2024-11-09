import React from 'react'
import { Dimensions, View } from 'react-native'

const returnPxByPercent = (percent, totalValue) => {
  return totalValue * (percent / 100)
}

export default function CircleClick({
  animeLinePosition,
  gameFieldScreenHeightSize,
  AnimationLineTime,
  CIRCLE_SIZE,
  returnObjectFilter,
  showObject1,
  setShowObject1,
}) {
  const circleStyle = (positionTop, positionLeft, click) => {
    return {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      backgroundColor: click ? '#f2f3f6' : 'red',
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
    console.log('itemId', itemId)

    if (lineAndCircle) {
      let newTeste = showObject1.map((itemT) => {
        if (itemT.id === itemId) {
          itemT.click = true
          return { ...itemT }
        }
        return { ...itemT }
      })
      setShowObject1(newTeste)
    }
  }

  const lineAndCircle = (positionLineByCircleClick, positionTopReturn) => {
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

    if (item.click) {
      return (
        <View
          onTouchStart={() => actionClick(lineAndCircleReturn, item.id)}
          key={item.id}
          style={circleStyle(positionTopReturn, item.positionLeft, item.click)}
        ></View>
      )
    } else {
      return (
        <View
          onTouchStart={() => actionClick(lineAndCircleReturn, item.id)}
          key={item.id}
          style={circleStyle(positionTopReturn, item.positionLeft, item.click)}
        ></View>
      )
    }
  })
}
