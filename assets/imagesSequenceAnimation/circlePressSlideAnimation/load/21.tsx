import * as React from 'react'
import Svg, { G, Path, Rect } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.65}>
      <Path
        d="M204 363.807L204 361L168 399.5L204 438L204 435.193"
        stroke="#148B91"
        strokeWidth={4}
      />
      <Path
        d="M596 435.193L596 438L632 399.5L596 361L596 363.807"
        stroke="#148B91"
        strokeWidth={4}
      />
      <Path
        d="M250 343.448L250 339L192 400L250 461L250 456.552"
        stroke="#148B91"
        strokeWidth={20}
      />
      <Path
        d="M553 456.552L553 461L611 400L553 339L553 343.448"
        stroke="#148B91"
        strokeWidth={20}
      />
    </G>
    <G opacity={0.65}>
      <Path
        d="M257.672 406.934C253.946 403.062 253.946 396.938 257.672 393.066L383.794 261.996C390.036 255.51 401 259.928 401 268.93L401 531.07C401 540.072 390.036 544.491 383.794 538.004L257.672 406.934Z"
        fill="#148B91"
      />
      <Path
        d="M544.968 393.413L418.845 262.343C412.916 256.181 402.5 260.378 402.5 268.93L402.5 531.07C402.5 539.622 412.916 543.819 418.845 537.657L544.968 406.587C548.507 402.909 548.507 397.091 544.968 393.413Z"
        fill="#148B91"
        stroke="#148B91"
      />
      <Rect
        x={0.708196}
        width={149.232}
        height={149.232}
        rx={34.5}
        transform="matrix(0.708196 -0.706016 0.708196 0.706016 294.781 400.5)"
        fill="#63FFCE"
        stroke="#148B91"
      />
    </G>
  </Svg>
)
export default SVGComponent
