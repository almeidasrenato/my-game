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
  onChangeCreateMode: (value: boolean) => void
}

interface TouchData {
  startTime: number
  startX: number
  index: number
  dragPath: Array<{ positionLeft: number; show: number }>
  lastX: number
  hasMoved: boolean
}

export const MusicGameComponent = ({
  createMode,
  onChangeCreateMode,
}: MusicGameProps) => {
  const gameRefs = {
    showObjectRef: useRef(showObjectArray),
    preLoadImageRef: useRef(pressImports.preLoadImageRef),
    timerRef: useRef(null),
    downLineDirection: useRef<boolean>(true),
    lineAnimationPosition: useRef(gameConfig.PADDING_LINE_ANIMATION),
  }

  const [startAnimated, onChangeStartAnimated] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)

  const collisionRefs = {
    top: {
      enabled: useRef<boolean>(false),
      frame: useRef<number>(1),
      height: useRef<number>(6),
    },
    bottom: {
      enabled: useRef<boolean>(false),
      frame: useRef<number>(1),
      height: useRef<number>(6),
    },
  }

  const player = useAudioPlayer(
    require('@/assets/music/eu-me-rendo-vocal-livre.mp3')
  )

  const audioControls = {
    playSound: async (pause: boolean) => {
      if (!pause) return player.pause()
      player.play()
    },

    onClickReset: (continueTimer: boolean) => {
      if (continueTimer) {
        clearInterval(gameRefs.timerRef.current)
        player.pause()
        player.replace(require('@/assets/music/eu-me-rendo-vocal-livre.mp3'))
        setTime(0)
        return
      }

      audioControls.playSound(true)
      const id = setInterval(() => {
        setTime(Math.round(player.currentTime * 1000))
      }, 16.6666667)
      gameRefs.timerRef.current = id
    },
  }

  const lineAnimation = {
    verifyLinePositionTop: () => {
      const percorredRange =
        gameConfig.ANIME_LINE_POSITION_MAX_HEIGHT -
        gameConfig.PADDING_LINE_ANIMATION
      const calcMoveLine =
        percorredRange / (59.9999999 * (gameConfig.ANIMATION_LINE_TIME / 1000))
      const ciclo = gameConfig.ANIMATION_LINE_TIME * 2
      const metadeCiclo = ciclo / 2

      if (gameRefs.downLineDirection.current) {
        gameRefs.lineAnimationPosition.current += calcMoveLine
        if (time % ciclo >= metadeCiclo) {
          gameRefs.downLineDirection.current = false
          gameRefs.lineAnimationPosition.current =
            gameConfig.ANIME_LINE_POSITION_MAX_HEIGHT
          collisionRefs.bottom.enabled.current = true
        }
      } else {
        gameRefs.lineAnimationPosition.current -= calcMoveLine
        if (time % ciclo < metadeCiclo) {
          gameRefs.downLineDirection.current = true
          gameRefs.lineAnimationPosition.current =
            gameConfig.PADDING_LINE_ANIMATION
          collisionRefs.top.enabled.current = true
        }
      }

      return gameRefs.lineAnimationPosition.current
    },

    getAnimatedStyle: () => ({
      top: lineAnimation.verifyLinePositionTop(),
    }),
  }

  const CreateModeRender = useCallback(
    ({ timeComponent }: { timeComponent: number }) => {
      const count = useRef(0)
      const touchData = useRef(new Map<number, TouchData>())

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
    const collision = isTop ? collisionRefs.top : collisionRefs.bottom

    if (collision.enabled.current && collision.frame.current <= 10) {
      if (collision.frame.current <= 5) {
        collision.height.current += 2.4
      } else if (collision.frame.current <= 10) {
        collision.height.current -= 2.4
      }
      collision.frame.current++
    } else if (collision.enabled.current) {
      collision.enabled.current = false
      collision.frame.current = 1
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
            0 - ((isTop ? 1 : -1) * collision.height.current) / 2,
        }}
      >
        {Array.from({ length: isTop ? 12 : 10 }).map((_, index) => (
          <View
            key={index}
            style={{
              [isTop ? 'top' : 'bottom']: isTop ? 29 : 23,
              height: collision.height.current,
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
      <GameHeader
        startAnimated={startAnimated}
        onChangeStartAnimated={onChangeStartAnimated}
        headerHeightSize={gameConfig.HEADER_HEIGHT_SIZE}
        onClickReset={audioControls.onClickReset}
        setTime={setTime}
        createMode={createMode}
        onChangeCreateMode={onChangeCreateMode}
      />

      <View style={styles.gameField}>
        <RenderLineCollision isTop={true} />

        {createMode && <CreateModeRender timeComponent={time} />}

        {verifyRenderObjectClick({
          showObjectRef: gameRefs.showObjectRef,
          time,
          lineAnimationPosition: gameRefs.lineAnimationPosition,
          preLoadImageRef: gameRefs.preLoadImageRef,
        })}

        <View style={[styles.line, lineAnimation.getAnimatedStyle()]} />

        <RenderLineCollision isTop={false} />
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
