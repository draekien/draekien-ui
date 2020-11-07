/** @jsx jsx */
import {jsx, Button as ThemeUiButton} from 'theme-ui'
import * as React from 'react'
import * as styles from './index.styles'

export type ButtonProps = {
  variant: string,
  children: React.ReactNode,
  onClick: () => {}
}

const Button: React.FC<ButtonProps> = ({variant, children, onClick}) => {
  return <ThemeUiButton sx={styles.buttonCss} variant={variant} onClick={onClick}>{children}</ThemeUiButton>
}

export default Button;