import React from 'react'

import { AppRoutes } from '~/navigation'
import { AppStackScreenProps } from '~/navigation/AppNavigator/AppNavigator.types'

import { Container, Title } from './ProfileScreen.style'

type Props = AppStackScreenProps<AppRoutes.Profile>

export const ProfileScreen = ({ route }: Props) => {
  const name = route.params?.name ?? 'Name is not specified'

  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  )
}
