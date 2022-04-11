import styled from 'styled-components/native'

import { Span } from '../primitives'

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  justify-content: center;
  align-items: center;
  padding: 13px;

  width: auto;

  background-color: ${({ theme }) => theme.colors.primaryFirst};
  border-radius: 12px;
`
export const Text = styled(Span)`
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
`
