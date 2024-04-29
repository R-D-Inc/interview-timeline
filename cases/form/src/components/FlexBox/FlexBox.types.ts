import { HTMLAttributes, ReactNode } from 'react'

type divProps = NonNullable<JSX.IntrinsicElements['div']['style']>

export type FlexBoxProps = {
  children?: ReactNode
  margin?: divProps['margin']
  padding?: divProps['padding']
  flexDirection?: divProps['flexDirection']
  flexWrap?: divProps['flexWrap']
  justifyContent?: divProps['justifyContent']
  alignItems?: divProps['alignItems']
  alignContent?: divProps['alignContent']
  flexBasis?: divProps['flexBasis']
  flexGrow?: divProps['flexGrow']
  flexShrink?: divProps['flexShrink']
  width?: divProps['width']
  height?: divProps['height']
  overflow?: divProps['overflow']
  style?: JSX.IntrinsicElements['div']['style']
  gap?: divProps['gap']
  className?: HTMLAttributes<HTMLLIElement>['className']
  onClick?: () => void
}
