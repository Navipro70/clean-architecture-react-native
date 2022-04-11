import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'

import { Button } from '~/components'
import { AppRoutes, AppStackParams, TabRoutes } from '~/navigation'

import { Container, Content, Title } from './InitialScreen.style'

type Props = StackScreenProps<AppStackParams, AppRoutes.Initial>

export const InitialScreen = ({ navigation }: Props) => {
  const goToHome = () => navigation.replace(AppRoutes.TabNavigator, { screen: TabRoutes.Home })

  return (
    <Container>
      <Content>
        <Title children={'Hello from custom\ntemplate 👋'} />
      </Content>
      <Button children="Go to app" onPress={goToHome} />
    </Container>
  )
}
