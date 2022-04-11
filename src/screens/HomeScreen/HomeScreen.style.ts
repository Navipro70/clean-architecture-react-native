import styled from 'styled-components/native'

import { FlexCenter, Span } from '~/components'

interface IContainer {
  topInsert: number
}

export const Container = styled(FlexCenter)<IContainer>`
  padding-top: ${({ topInsert }) => topInsert}px;
`

export const Title = styled(Span)`
  ${({ theme }) => theme.fonts.title5Regular}

  text-align: center;
`
