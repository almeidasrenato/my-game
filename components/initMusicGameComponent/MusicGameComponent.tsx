import React, { useRef, useState, useEffect, useCallback, memo } from 'react'
import { StyleSheet, View } from 'react-native'

import GameHeader from './MusicGameHeader'
import GameFooter from './MusicGameFooter'

import { showObjectArray } from '@/Mocks/showObjectMock'
import { gameConfig } from '@/utils/game'

import { useAudioPlayer } from 'expo-audio'
import { verifyRenderObjectClick } from './MusicGameVerifyRender'

import Svg1 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/1'
import Svg2 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/2'
import Svg3 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/3'
import Svg4 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/4'
import Svg5 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/5'
import Svg6 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/6'
import Svg7 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/7'
import Svg8 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/8'
import Svg9 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/9'
import Svg10 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/10'
import Svg11 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/11'
import Svg12 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/12'
import Svg13 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/13'
import Svg14 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/14'
import Svg15 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/15'
import Svg16 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/16'
import Svg17 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/17'
import Svg18 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/18'
import Svg19 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/19'
import Svg20 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/20'
import Svg21 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/21'
import Svg22 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/22'
import Svg23 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/23'
import Svg24 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/24'
import Svg25 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/25'
import Svg26 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/26'
import Svg27 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/27'
import Svg28 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/28'
import Svg29 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/29'
import Svg30 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/30'
import Svg31 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/31'
import Svg32 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/32'
import Svg33 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/33'
import Svg34 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/34'
import Svg35 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/35'
import Svg36 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/36'
import Svg37 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/37'
import Svg38 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/38'
import Svg39 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/39'
import Svg40 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/40'
import Svg41 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/41'
import Svg42 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/42'
import Svg43 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/43'
import Svg44 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/44'
import Svg45 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/45'
import Svg46 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/46'
import Svg47 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/47'
import Svg48 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/48'
import Svg49 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/49'
import Svg50 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/50'
import Svg51 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/51'
import Svg52 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/52'
import Svg53 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/53'
import Svg54 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/54'
import Svg55 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/55'
import Svg56 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/56'
import Svg57 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/57'
import Svg58 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/58'
import Svg59 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/59'
import Svg60 from '@/assets/imagesSequenceAnimation/circlePressAnimation/load/60'

type MusicGameProps = {
  createMode: boolean
}

export const MusicGameComponent = ({ createMode }: MusicGameProps) => {
  const showObjectRef = useRef(showObjectArray)

  const preLoadImageRef = useRef({
    circle: {
      load: [
        Svg1,
        Svg2,
        Svg3,
        Svg4,
        Svg5,
        Svg6,
        Svg7,
        Svg8,
        Svg9,
        Svg10,
        Svg11,
        Svg12,
        Svg13,
        Svg14,
        Svg15,
        Svg16,
        Svg17,
        Svg18,
        Svg19,
        Svg20,
        Svg21,
        Svg22,
        Svg23,
        Svg24,
        Svg25,
        Svg26,
        Svg27,
        Svg28,
        Svg29,
        Svg30,
        Svg31,
        Svg32,
        Svg33,
        Svg34,
        Svg35,
        Svg36,
        Svg37,
        Svg38,
        Svg39,
        Svg40,
        Svg41,
        Svg42,
        Svg43,
        Svg44,
        Svg45,
        Svg46,
        Svg47,
        Svg48,
        Svg49,
        Svg50,
        Svg51,
        Svg52,
        Svg53,
        Svg54,
        Svg55,
        Svg56,
        Svg57,
        Svg58,
        Svg59,
        Svg60,
      ],
    },
  })

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
        (type: 'start' | 'move' | 'end', index?: number, event: any) => {
          const touches =
            type === 'end'
              ? event.nativeEvent.changedTouches
              : event.nativeEvent.touches

          touches.forEach((touch: any) => {
            const touchId = touch.identifier

            switch (type) {
              case 'start':
                touchData.current.set(touchId, {
                  startTime: Date.now(),
                  startX: touch.pageX,
                  index,
                  dragPath: [],
                })
                break

              case 'move':
                const moveData = touchData.current.get(touchId)
                if (moveData?.dragPath.length === 0) {
                  moveData.dragPath.push({
                    positionLeft: null,
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

                if (Math.abs(deltaX) > 20) {
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
          })
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
          onTouchStart={(e) => e.stopPropagation()}
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
              onTouchMove={(e) => handleTouch('move', undefined, e)}
              onTouchEnd={(e) => handleTouch('end', undefined, e)}
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
