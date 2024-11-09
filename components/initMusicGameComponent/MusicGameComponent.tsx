import { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated'

import moment from 'moment'

import { Audio } from 'expo-av'

import GameHeader from './MusicGameHeader'
import CircleClick from './MusicGameCircle'
import GameFooter from './MusicGameFooter'
import { showObject } from '@/Mocks/showObjectMock'
import { gameConfig } from '@/utils/game'

//! Atualizar player futuramente
// import { useAudioPlayer } from 'expo-audio'
//!---------------------------

//! Disable strict mode
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
})
//!---------------------------

type MusicGameProps = {
  createMode: boolean
}

export const MusicGameComponent = ({ createMode }: MusicGameProps) => {
  const [showObject1, setShowObject1] = useState(showObject)
  const [startAnimated, onChangeStartAnimated] = useState(false)
  const [time, setTime] = useState(0)

  const [verifyObjectFilterObjectClick, setVerifyObjectFilterObjectClick] =
    useState(undefined)

  const Ref = useRef(null)
  const RefTimer = useRef(null)
  const SoundRef = useRef(null)

  //! Atualizar player futuramente
  // const player = useAudioPlayer(
  //   require('../../assets/music/eu-me-rendo-vocal-livre.mp3')
  // )

  // const player = useAudioPlayer({
  //   uri: require('@/assets/music/eu-me-rendo-vocal-livre.mp3'),
  // })
  //!---------------------------

  const animeLinePosition = useSharedValue(gameConfig.PADDING_LINE_ANIMATION)

  const ObjectClickVisibility = () => {
    let returnObjectFilter = showObject1.filter(
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
            animeLinePosition={animeLinePosition.value}
            gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
            AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
            CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
            returnObjectFilter={returnObjectFilter}
            showObject1={showObject1}
            setShowObject1={setShowObject1}
          />
        )
      }
    }
  }

  async function playSound(pause) {
    if (!pause) {
      return SoundRef.current.unloadAsync()
    }

    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/music/eu-me-rendo-vocal-livre.mp3')
    )

    SoundRef.current = sound

    console.log('Playing Sound')
    await sound.playAsync()

    //! Atualizar player futuramente
    // if (!pause) {
    //   player.pause()
    // }

    // console.log('Loading Sound')
    // player.play()
    //!---------------------------
  }

  const onClickReset = (continueTimer) => {
    if (continueTimer) {
      clearInterval(Ref.current)
      playSound(false)
      setTime(0)
      return
    }

    playSound(true)

    if (RefTimer.value) {
      RefTimer.value = moment(new Date()).subtract(time)
    } else {
      RefTimer.value = moment(new Date())
    }

    const id = setInterval(() => {
      const end = moment(new Date())
      const diff = end.diff(RefTimer.value)

      setTime(diff)
      // }, 100)
    }, 10)
    Ref.current = id
  }

  const startAnimationFunction = (pause) => {
    if (pause) {
      cancelAnimation(animeLinePosition)
      return
    }

    animeLinePosition.value = withRepeat(
      withTiming(
        gameConfig.ANIME_LINE_POSITION_MAX_HEIGHT,
        { duration: gameConfig.ANIMATION_LINE_TIME, easing: Easing.linear },
        (finished, currentValue) => {
          if (finished) {
          } else {
            animeLinePosition.value = gameConfig.PADDING_LINE_ANIMATION
          }
        }
      ),
      false,
      true,
      (finished) => {
        const resultStr = finished
          ? 'All repeats are completed'
          : 'withRepeat cancelled'
      }
    )
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: animeLinePosition.value,
    }
  })

  const createModeRender = () => {
    const count = useRef(0)

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
              show: ${time},
              click: false,
              positionLeft: ${index},
            },`)
            }}
          ></View>
        ))}
      </View>
    )
  }
  return (
    <View style={styles.percentContainer}>
      <GameHeader
        startAnimated={startAnimated}
        onChangeStartAnimated={onChangeStartAnimated}
        startAnimationFunction={startAnimationFunction}
        headerHeightSize={gameConfig.HEADER_HEIGHT_SIZE}
        onClickReset={onClickReset}
        setTime={setTime}
      />

      <View style={styles.gameField}>
        {createMode && createModeRender()}
        {ObjectClickVisibility()}
        <Animated.View style={[styles.line, animatedStyles]} />
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
