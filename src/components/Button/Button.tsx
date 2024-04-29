import { Spinner } from '@radix-ui/themes'
import classNames from 'classnames'
import { forwardRef, MouseEventHandler, useMemo } from 'react'
import styles from './Button.module.scss'
import type { ButtonProps } from './Button.types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    theme = 'primary',
    loading,
    size = 'medium',
    variant = 'fill',
    children,
    fullWidth,
    type = 'button',
    preventEnter,
    onClick,
    ...rest
  } = props

  const onClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (loading || !onClick) {
      return
    }
    onClick(e)
  }

  const themeStyle = theme !== 'none' ? `${theme}-${variant}` : theme

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onKeyDown={
        preventEnter
          ? (e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
              }
            }
          : undefined
      }
      className={classNames(
        styles[size],
        styles[themeStyle],
        className,
        fullWidth && styles['full-width'],
        styles.button,
      )}
      onClick={onClickButton}
      ref={ref}
      {...rest}
    >
      {loading ? <Spinner size='3' /> : <span>{children}</span>}
    </button>
  )
})

const [displayName] = Object.keys({ Button })
Button.displayName = displayName

export default Button
