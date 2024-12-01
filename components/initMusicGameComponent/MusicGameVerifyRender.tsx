import { gameConfig } from '@/utils/game'
import CircleClick from './MusicGameCircle'

export const verifyRenderObjectClick = ({
  showObjectRef,
  time,
  lineAnimationPosition,
}) => {
  let returnObjectFilterCircleClick = showObjectRef.current.filter(
    (item) =>
      time >= item.show - gameConfig.ANIMATION_LINE_TIME &&
      time <= item.show + gameConfig.ANIMATION_LINE_TIME / 2
  )

  if (returnObjectFilterCircleClick.length > 0) {
    return (
      <CircleClick
        animeLinePosition={lineAnimationPosition.current}
        gameFieldScreenHeightSize={gameConfig.GAME_FIELD_SCREEN_HEIGHT_SIZE}
        AnimationLineTime={gameConfig.ANIMATION_LINE_TIME}
        time={time}
        CIRCLE_SIZE={gameConfig.CIRCLE_SIZE}
        returnObjectFilter={returnObjectFilterCircleClick}
        showObjectRef={showObjectRef.current}
      />
    )
  }
}
