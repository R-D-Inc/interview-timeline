export type ButtonProps = {
  theme?: 'primary' | 'danger' | 'success' | 'none'
  size?: 'large' | 'medium' | 'small'
  variant?: 'fill' | 'outlined' | 'pale'
  loading?: boolean
  fullWidth?: boolean
} & Omit<JSX.IntrinsicElements['button'], 'type'> &
  (
    | {
        type?: Exclude<JSX.IntrinsicElements['button']['type'], 'submit'>
        preventEnter?: never
      }
    | {
        type: 'submit'
        preventEnter?: boolean
      }
  )
