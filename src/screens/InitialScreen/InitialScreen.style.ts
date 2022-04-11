import styled from 'styled-components/native'

import { FlexCenter, SafeAreaFlex, Span } from '~/components'

export const Container = styled(SafeAreaFlex)`
  padding: 20px;
`

export const Content = styled(FlexCenter)``

export const Title = styled(Span)`
  ${({ theme }) => theme.fonts.title5Regular};

  text-align: center;
`
