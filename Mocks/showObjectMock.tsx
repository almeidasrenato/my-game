type Range<
  N extends number,
  Result extends number[] = []
> = Result['length'] extends N
  ? Result[number]
  : Range<N, [...Result, Result['length']]>

export type ShowObject = {
  id: number //* id
  show: number //* time of show
  positionLeft: Range<101> //* positionLeft of showObject in percent from left side of screen (0-100)
  click: boolean //* click
  miss: boolean //* miss
  type: 'press' | 'drag' | 'slide' | 'hold' //* type of showObject
  direction: 'left' | 'right' | null //* direction of showObject
  duration: number //* duration of showObject
  path: { positionLeft: number; show: number }[] | null //* path of showObject
}

export const showObjectArray: ShowObject[] = []
