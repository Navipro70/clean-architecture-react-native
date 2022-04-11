import React, { FC } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Text } from './Button.style'

type Props = Omit<TouchableOpacityProps, 'activeOpacity'>

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Text children={children} />
    </Container>
  )
}
