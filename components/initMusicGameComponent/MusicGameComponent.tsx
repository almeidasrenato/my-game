import { useRef, useState, useEffect, useCallback, memo } from 'react'
import { StyleSheet, View } from 'react-native'

import moment from 'moment'

import GameHeader from './MusicGameHeader'
import CircleClick from './MusicGameCircle'
import GameFooter from './MusicGameFooter'
import { showObjectArray } from '@/Mocks/showObjectMock'
import { gameConfig } from '@/utils/game'

import { useAudioPlayer } from 'expo-audio'

type MusicGameProps = {
  createMode: boolean
}

export const MusicGameComponent = ({ createMode }: MusicGameProps) => {
  const showObjectRef = useRef(showObjectArray)

  const [startAnimated, onChangeStartAnimated] = useState(false)
  const [time, setTime] = useState(0)

  const [verifyObjectFilterObjectClick, setVerifyObjectFilterObjectClick] =
    useState(undefined)

  const Ref = useRef(null)

  const downLineDirection = useRef(true)
  const lineAnimationPosition = useRef(gameConfig.PADDING_LINE_ANIMATION)

  useEffect(() => {}, [createMode])

  const player = useAudioPlayer(
    require('@/assets/music/eu-me-rendo-vocal-livre.mp3')
  )
  //!---------------------------

  const ObjectClickVisibility = () => {
    let returnObjectFilter = showObjectRef.current.filter(
      (item) =>
        time >= item.show - gameConfig.ANIMATION_LINE_TIME &&
        time <= item.show + gameConfig.ANIMATION_LINE_TIME / 2
    )

    if (returnObjectFilter.length > 0) {
      if (
        JSON.stringify(verifyObjectFilterObjectClick) !==
        JSON.stringify(returnObjectFilter)
      ) {
        setVerifyObjectFilterObjectClick(returnObjectFilter)
      } else {
        return (
          <CircleClick
            animeLinePosition={lineAnimationPosition.current}
            gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
            AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
            time={time}
            CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
            returnObjectFilter={returnObjectFilter}
            showObjectRef={showObjectRef.current}
          />
        )
      }
    }
  }

  async function playSound(pause: boolean) {
    if (!pause) {
      return player.pause()
    }
    player.play()
  }

  const onClickReset = (continueTimer: boolean) => {
    if (continueTimer) {
      clearInterval(Ref.current)
      playSound(false)
      setTime(0)
      return
    }

    playSound(true)

    const id = setInterval(() => {
      setTime(Math.round(player.currentTime * 1000))
    }, 16.6666667)

    Ref.current = id
  }

  const verifyLinePositionTop = () => {
    const paddingLineAnimation = gameConfig.PADDING_LINE_ANIMATION

    const animeLinePositionMaxHeight = gameConfig.ANIME_LINE_POSITION_MAX_HEIGHT

    const animationLineTime = gameConfig.ANIMATION_LINE_TIME

    const percorredRange = animeLinePositionMaxHeight - paddingLineAnimation

    const calcMoveLine =
      percorredRange / (59.9999999 * (animationLineTime / 1000))

    const ciclo = animationLineTime * 2
    const metadeCiclo = ciclo / 2

    if (downLineDirection.current) {
      lineAnimationPosition.current += calcMoveLine

      if (time % ciclo >= metadeCiclo) {
        downLineDirection.current = false
        lineAnimationPosition.current = animeLinePositionMaxHeight
      }
    } else {
      lineAnimationPosition.current -= calcMoveLine

      if (time % ciclo < metadeCiclo) {
        downLineDirection.current = true
        lineAnimationPosition.current = paddingLineAnimation
      }
    }

    return lineAnimationPosition.current
  }

  const animatedStyleCustom = () => {
    return {
      top: verifyLinePositionTop(),
    }
  }

  const CreateModeRender = useCallback(
    ({ timeComponent }: { timeComponent: number }) => {
      const count = useRef(0)

      useEffect(() => {}, [])

      return (
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            flexDirection: 'row',
          }}
        >
          {Array.from({ length: 100 }).map((item, index) => (
            <View
              key={index}
              style={{
                height: gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE,
                width: '1%',
                backgroundColor: 'blue',
              }}
              onTouchStart={() => {
                return console.log(`{
              id: ${count.current++},
              show: ${timeComponent - 50},
              click: false,
              positionLeft: ${index},
              miss: false
            },`)
              }}
            />
          ))}
        </View>
      )
    },
    []
  )

  return (
    <View style={styles.percentContainer}>
      <GameHeader
        startAnimated={startAnimated}
        onChangeStartAnimated={onChangeStartAnimated}
        headerHeightSize={gameConfig.HEADER_HEIGHT_SIZE}
        onClickReset={onClickReset}
        setTime={setTime}
      />

      <View style={styles.gameField}>
        {createMode && <CreateModeRender timeComponent={time} />}

        {ObjectClickVisibility()}

        <View style={[styles.line, animatedStyleCustom()]} />
      </View>

      <GameFooter
        footerHeightSize={gameConfig.FOOTER_HEIGHT_SIZE}
        time={time}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: gameConfig.FIELD_BACKGROUND,
  },

  gameField: {
    width: '100%',
    height: gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE,
    backgroundColor: gameConfig.GAME_BACKGROUND_COLOR,
  },

  line: {
    width: '100%',
    height: gameConfig.LINE_HEIGHT_SIZE,
    backgroundColor: gameConfig.LINE_COLOR,
  },
})
