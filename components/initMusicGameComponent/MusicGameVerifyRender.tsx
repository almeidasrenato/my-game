import { gameConfig } from '@/utils/game'
import CircleClick from './MusicGameCircle'
import SlideClick from './MusicGameSlide'

export const verifyRenderObjectClick = ({
  showObjectRef,
  time,
  lineAnimationPosition,
  preLoadImageRef,
}) => {
  let returnObjectFilterCircleClick = showObjectRef.current.filter(
    (item) =>
      time >= item.show - gameConfig.ANIMATION_LINE_TIME &&
      time <= item.show + gameConfig.ANIMATION_LINE_TIME / 2
  )

  if (returnObjectFilterCircleClick.length > 0) {
    const filterTypePress = returnObjectFilterCircleClick.filter(
      (item) => item.type === 'press'
    )

    const filterTypeSlide = returnObjectFilterCircleClick.filter(
      (item) => item.type === 'slide'
    )

    return (
      <CircleClick
        animeLinePosition={lineAnimationPosition.current}
        gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
        AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
        time={time}
        CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
        returnObjectFilter={returnObjectFilterCircleClick}
        showObjectRef={showObjectRef.current}
        preLoadImageRef={preLoadImageRef}
      />
    )

    return (
      <>
        {/* {filterTypePress.length > 0 && (
          <CircleClick
            animeLinePosition={lineAnimationPosition.current}
            gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
            AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
            time={time}
            CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
            returnObjectFilter={returnObjectFilterCircleClick}
            showObjectRef={showObjectRef.current}
            preLoadImageRef={preLoadImageRef}
          />
        )} */}

        {/* {filterTypeSlide.length > 0 && (
          <SlideClick
            animeLinePosition={lineAnimationPosition.current}
            gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
            AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
            time={time}
            CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
            returnObjectFilter={returnObjectFilterCircleClick}
            showObjectRef={showObjectRef.current}
            preLoadImageRef={preLoadImageRef}
          />
        )} */}
      </>
    )

    // if (filterTypePress.length > 0) {
    //   return (
    //     <CircleClick
    //       animeLinePosition={lineAnimationPosition.current}
    //       gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
    //       AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
    //       time={time}
    //       CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
    //       returnObjectFilter={returnObjectFilterCircleClick}
    //       showObjectRef={showObjectRef.current}
    //       preLoadImageRef={preLoadImageRef}
    //     />
    //   )
    // }

    // if (filterTypeSlide.length > 0) {
    //   return (
    //     <SlideClick
    //       animeLinePosition={lineAnimationPosition.current}
    //       gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
    //       AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
    //       time={time}
    //       CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
    //       returnObjectFilter={returnObjectFilterCircleClick}
    //       showObjectRef={showObjectRef.current}
    //       preLoadImageRef={preLoadImageRef}
    //     />
    //   )
    // }
  }
}
