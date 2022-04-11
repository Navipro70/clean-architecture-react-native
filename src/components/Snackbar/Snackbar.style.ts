import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

import { Span } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { platformSelect } from '~/utils'

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;

  width: 100%;

  z-index: 10000000000000;
`

export const Wrapper = styled.TouchableWithoutFeedback`
  width: 100%;
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${SCREEN_WIDTH - 32}px;

  margin: 16px;
  margin-top: ${platformSelect({ ios: getStatusBarHeight(), android: 0 }) + 12}px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.primaryFirst};

  border-radius: 12px;
`

export const Text = styled(Span).attrs({ numberOfLines: 2 })`
  flex: 1;

  margin-left: 12px;

  color: ${({ theme }) => theme.colors.white};
`
