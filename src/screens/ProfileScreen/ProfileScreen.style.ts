import styled from 'styled-components/native'

import { SafeAreaFlex, Span } from '~/components'

export const Container = styled(SafeAreaFlex)``

export const Title = styled(Span)`
  margin-top: 24px;

  ${({ theme }) => theme.fonts.title5Regular}

  text-align: center;
`
