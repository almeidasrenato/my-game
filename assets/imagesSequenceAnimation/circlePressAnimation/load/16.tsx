import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 800 800" width={800} height={800} fill="none" {...props}>
    <Circle
      cx={400.5}
      cy={400.5}
      r={217.5}
      fill="#1D9114"
      fillOpacity={0.525}
    />
  </Svg>
)
export default SvgComponent
