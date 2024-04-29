import classNames from 'classnames'
import { forwardRef } from 'react'

import styles from './FlexBox.module.scss'
import type { FlexBoxProps } from './FlexBox.types'

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>((props, ref) => {
  const { children, style, className, onClick, ...stylePlops } = props
  return (
    <div ref={ref} className={classNames(styles.flex, className)} style={{ ...stylePlops, ...style }} onClick={onClick}>
      {children}
    </div>
  )
})

const [displayName] = Object.keys({ FlexBox })
FlexBox.displayName = displayName

export default FlexBox
