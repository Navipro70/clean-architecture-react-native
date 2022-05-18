import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { InitialScreen, ModalScreen, ProfileScreen } from '~/screens'

import { AppRoutes } from '../Routes'

import { cardGroupOptions, modalGroupOptions } from './AppNavigator.options'
import { AppStackParams } from './AppNavigator.types'
import { TabNavigator } from './TabNavigator'

const Stack = createStackNavigator<AppStackParams>()

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={cardGroupOptions}>
        <Stack.Screen component={InitialScreen} name={AppRoutes.Initial} />
        <Stack.Screen component={TabNavigator} name={AppRoutes.TabNavigator} />
        <Stack.Screen component={ProfileScreen} name={AppRoutes.Profile} />
      </Stack.Group>

      <Stack.Group screenOptions={modalGroupOptions}>
        <Stack.Screen component={ModalScreen} name={AppRoutes.Modal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
