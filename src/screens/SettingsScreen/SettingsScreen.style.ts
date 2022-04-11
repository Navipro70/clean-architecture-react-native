import styled from 'styled-components/native'

import { Flex } from '~/components'

interface IContainer {
  topInsert: number
}

export const Container = styled(Flex)<IContainer>`
  padding-top: ${({ topInsert }) => topInsert + 20}px;
`
