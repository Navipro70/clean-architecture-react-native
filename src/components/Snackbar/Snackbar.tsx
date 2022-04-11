import React, { memo } from 'react'
import { LayoutChangeEvent } from 'react-native'
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

import { Icons } from '~/assets'

import { Container, Content, Text, Wrapper } from './Snackbar.style'

interface Props {
  text: string
  animation: SharedValue<number>
  close: () => void
  onLayout: (e: LayoutChangeEvent) => void
}

export const Snackbar = memo(({ text, animation, close, onLayout }: Props) => {
  const translateAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animation.value }],
  }))

  return (
    <Container style={translateAnimStyle} onLayout={onLayout}>
      <Wrapper onPress={close}>
        <Content>
          <Icons.Attention />
          <Text>{text}</Text>
        </Content>
      </Wrapper>
    </Container>
  )
})
