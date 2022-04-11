import styled from 'styled-components/native'

import { Span } from '../primitives'

interface IItem {
  isLast: boolean
}

export const Container = styled.View`
  margin-bottom: 8px;
`

export const Title = styled(Span)`
  margin: 12px 20px;

  ${({ theme }) => theme.fonts.title5Regular}
`

export const ItemContainer = styled.TouchableOpacity.attrs<IItem>({ activeOpacity: 0.7 })<IItem>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.separatorFirst};
  border-bottom-width: ${({ isLast }) => (isLast ? 1 : 0)}px;
  border-bottom-color: ${({ theme }) => theme.colors.separatorFirst};
`

export const ItemText = styled(Span)``
