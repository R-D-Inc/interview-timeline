import classNames from 'classnames'
import { forwardRef, memo } from 'react'
import { FlexBox } from '../FlexBox'
import styles from './Input.module.scss'
import { InputProps } from './Input.types'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    className,
    theme = 'primary',
    prefix,
    suffix,
    error,
    gap = '0.25rem',
    required,
    description,
    fullWidth,
    ...rest
  } = props
  return (
    <label className={classNames(styles[error ? 'error' : theme], className, fullWidth && styles['full-width'])}>
      <FlexBox flexDirection='column'>
        <span>{label}</span>
        <FlexBox alignItems='center' gap={gap} style={{ width: '100%' }}>
          {prefix && <span>{prefix}</span>}
          <input {...rest} ref={ref} autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          {suffix && <span>{suffix}</span>}
        </FlexBox>
        {description && <span className={styles.description}>{description}</span>}
        {typeof error === 'string' && <span color='error'>{error}</span>}
      </FlexBox>
    </label>
  )
})

const [displayName] = Object.keys(Input)
Input.displayName = displayName

export default memo(Input)
