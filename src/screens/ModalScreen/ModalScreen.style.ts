import styled from 'styled-components/native'

import { FlexCenter, Span } from '~/components'

export const Container = styled(FlexCenter)``

export const Title = styled(Span)`
  ${({ theme }) => theme.fonts.title5Regular}

  text-align: center;
`
