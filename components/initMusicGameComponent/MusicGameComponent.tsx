import { useRef, useState, useEffect, useCallback, memo } from 'react'
import { StyleSheet, View } from 'react-native'

import GameHeader from './MusicGameHeader'
import GameFooter from './MusicGameFooter'

import { showObjectArray } from '@/Mocks/showObjectMock'
import { gameConfig } from '@/utils/game'

import { useAudioPlayer } from 'expo-audio'
import { verifyRenderObjectClick } from './MusicGameVerifyRender'

type MusicGameProps = {
  createMode: boolean
}

export const MusicGameComponent = ({ createMode }: MusicGameProps) => {
  const showObjectRef = useRef(showObjectArray)

  const [startAnimated, onChangeStartAnimated] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)

  const Ref = useRef(null)

  const downLineDirection = useRef<boolean>(true)
  const lineAnimationPosition = useRef(gameConfig.PADDING_LINE_ANIMATION)

  useEffect(() => {}, [createMode])

  const player = useAudioPlayer(
    require('@/assets/music/eu-me-rendo-vocal-livre.mp3')
  )

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
    const percorredRange =
      gameConfig.ANIME_LINE_POSITION_MAX_HEIGHT -
      gameConfig.PADDING_LINE_ANIMATION

    const calcMoveLine =
      percorredRange / (59.9999999 * (gameConfig.ANIMATION_LINE_TIME / 1000))

    const ciclo = gameConfig.ANIMATION_LINE_TIME * 2
    const metadeCiclo = ciclo / 2

    if (downLineDirection.current) {
      lineAnimationPosition.current += calcMoveLine

      if (time % ciclo >= metadeCiclo) {
        downLineDirection.current = false
        lineAnimationPosition.current =
          gameConfig.ANIME_LINE_POSITION_MAX_HEIGHT
      }
    } else {
      lineAnimationPosition.current -= calcMoveLine

      if (time % ciclo < metadeCiclo) {
        downLineDirection.current = true
        lineAnimationPosition.current = gameConfig.PADDING_LINE_ANIMATION
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
                  positionLeft: ${index},
                  click: false,
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
      {GameHeader({
        startAnimated,
        onChangeStartAnimated,
        headerHeightSize: gameConfig.HEADER_HEIGHT_SIZE,
        onClickReset,
        setTime,
      })}

      <View style={styles.gameField}>
        {createMode && CreateModeRender({ timeComponent: time })}

        {verifyRenderObjectClick({
          showObjectRef,
          time,
          lineAnimationPosition,
        })}

        <View style={[styles.line, animatedStyleCustom()]} />
      </View>

      {GameFooter({ footerHeightSize: gameConfig.FOOTER_HEIGHT_SIZE, time })}
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
