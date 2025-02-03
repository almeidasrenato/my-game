import React, { useRef, useState, useEffect, useCallback, memo } from 'react'
import { StyleSheet, View } from 'react-native'

import GameHeader from './MusicGameHeader'
import GameFooter from './MusicGameFooter'

import { showObjectArray } from '@/Mocks/showObjectMock'
import { gameConfig } from '@/utils/game'
import { pressImports } from '@/utils/game'

import { useAudioPlayer } from 'expo-audio'
import { verifyRenderObjectClick } from './MusicGameVerifyRender'

type MusicGameProps = {
  createMode: boolean
}

export const MusicGameComponent = ({ createMode }: MusicGameProps) => {
  const showObjectRef = useRef(showObjectArray)
  const preLoadImageRef = useRef(pressImports.preLoadImageRef)

  const [startAnimated, onChangeStartAnimated] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)

  const Ref = useRef(null)

  const downLineDirection = useRef<boolean>(true)
  const lineAnimationPosition = useRef(gameConfig.PADDING_LINE_ANIMATION)

  const enabledLineCollisionTop = useRef<boolean>(false)
  const enabledLineCollisionBottom = useRef<boolean>(false)

  const enabledLineCollisionTopFrame = useRef<number>(1)
  const enabledLineCollisionBottomFrame = useRef<number>(1)

  const heightLineCollisionTop = useRef<number>(6)
  const heightLineCollisionBottom = useRef<number>(6)

  useEffect(() => {}, [createMode])

  useEffect(() => {}, [])

  const player = useAudioPlayer(
    require('@/assets/music/os-meus-labios-te-louvam.mp3')
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

        enabledLineCollisionBottom.current = true
      }
    } else {
      lineAnimationPosition.current -= calcMoveLine

      if (time % ciclo < metadeCiclo) {
        downLineDirection.current = true
        lineAnimationPosition.current = gameConfig.PADDING_LINE_ANIMATION

        enabledLineCollisionTop.current = true
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
      const touchData = useRef(new Map())

      const handleTouch = useCallback(
        (type: 'start' | 'move' | 'end', index: number, event: any) => {
          event.stopPropagation()
          const touch =
            event.nativeEvent.touches?.[0] ||
            event.nativeEvent.changedTouches?.[0]

          if (!touch) return

          const touchId = index

          switch (type) {
            case 'start':
              touchData.current.set(touchId, {
                startTime: Date.now(),
                startX: touch.pageX,
                index,
                dragPath: [],
                lastX: touch.pageX,
                hasMoved: false,
              })
              break

            case 'move':
              const moveData = touchData.current.get(touchId)
              if (!moveData) return

              const currentDeltaX = Math.abs(touch.pageX - moveData.lastX)
              if (currentDeltaX > 5) {
                moveData.hasMoved = true
              }
              moveData.lastX = touch.pageX

              if (moveData.dragPath.length === 0) {
                moveData.dragPath.push({
                  positionLeft: moveData.index,
                  show: timeComponent - 50,
                })
              }
              break

            case 'end':
              const data = touchData.current.get(touchId)
              if (!data) return

              const touchDuration = Date.now() - data.startTime
              const deltaX = touch.pageX - data.startX

              const gestureInfo = {
                type: 'press',
                direction: null,
                path: null,
              }

              if (data.hasMoved && Math.abs(deltaX) > 20) {
                if (touchDuration < 300) {
                  gestureInfo.type = 'slide'
                  gestureInfo.direction = deltaX > 0 ? 'right' : 'left'
                } else {
                  gestureInfo.type = 'drag'
                  gestureInfo.path =
                    data.dragPath.length > 0 ? [...data.dragPath] : null
                }
              } else if (touchDuration > 300) {
                gestureInfo.type = 'hold'
              }

              console.log(`{
                id: ${count.current++},
                type: '${gestureInfo.type}',
                direction: ${
                  gestureInfo.direction ? `'${gestureInfo.direction}'` : 'null'
                },
                duration: ${touchDuration},
                show: ${timeComponent - 50},
                positionLeft: ${data.index},
                path: ${
                  gestureInfo.path ? JSON.stringify(gestureInfo.path) : 'null'
                },
                click: false,
                miss: false
              },`)

              touchData.current.delete(touchId)
              break
          }
        },
        [timeComponent]
      )

      return (
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            flexDirection: 'row',
          }}
        >
          {Array.from({ length: 100 }).map((_, index) => (
            <View
              key={index}
              style={{
                height: gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE,
                width: '1%',
                backgroundColor:
                  index % 8 === 0 ? 'rgba(0,0,255,0.5)' : 'rgba(0,0,255,0.2)',
              }}
              onTouchStart={(e) => handleTouch('start', index, e)}
              onTouchMove={(e) => handleTouch('move', index, e)}
              onTouchEnd={(e) => handleTouch('end', index, e)}
            />
          ))}
        </View>
      )
    },
    []
  )

  const RenderLineCollision = ({ isTop }: { isTop: boolean }) => {
    const enabledCollision = isTop
      ? enabledLineCollisionTop
      : enabledLineCollisionBottom
    const collisionFrame = isTop
      ? enabledLineCollisionTopFrame
      : enabledLineCollisionBottomFrame
    const heightCollision = isTop
      ? heightLineCollisionTop
      : heightLineCollisionBottom

    if (enabledCollision.current && collisionFrame.current <= 10) {
      if (collisionFrame.current <= 5) {
        heightCollision.current += 2.4
      } else if (collisionFrame.current <= 10) {
        heightCollision.current -= 2.4
      }
      collisionFrame.current++
    } else if (enabledCollision.current) {
      enabledCollision.current = false
      collisionFrame.current = 1
    }

    return (
      <View
        style={{
          position: 'absolute',
          height: 10,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          [isTop ? 'top' : 'bottom']:
            0 - ((isTop ? 1 : -1) * heightCollision.current) / 2,
        }}
      >
        {Array.from({ length: isTop ? 12 : 10 }).map((_, index) => (
          <View
            key={index}
            style={{
              [isTop ? 'top' : 'bottom']: isTop ? 29 : 23,
              height: heightCollision.current,
              width: 2,
              backgroundColor: gameConfig.LINE_COLOR,
              opacity: 0.4,
            }}
          />
        ))}
      </View>
    )
  }

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
        <RenderLineCollision isTop={true} />

        {createMode && CreateModeRender({ timeComponent: time })}

        {verifyRenderObjectClick({
          showObjectRef,
          time,
          lineAnimationPosition,
          preLoadImageRef,
        })}

        <View style={[styles.line, animatedStyleCustom()]} />

        <RenderLineCollision isTop={false} />
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
