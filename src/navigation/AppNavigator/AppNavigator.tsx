import { NavigatorScreenParams } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { InitialScreen, ModalScreen } from '~/screens'

import { AppRoutes } from '../Routes'

import { cardGroupOptions, modalGroupOptions } from './AppNavigator.options'
import { TabNavigator, TabStackParams } from './TabNavigator'

export interface AppStackParams extends Record<string, object | undefined> {
  [AppRoutes.Initial]: undefined
  [AppRoutes.TabNavigator]: NavigatorScreenParams<TabStackParams>

  [AppRoutes.Modal]: undefined
}

const Stack = createStackNavigator<AppStackParams>()

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={cardGroupOptions}>
        <Stack.Screen component={InitialScreen} name={AppRoutes.Initial} />
        <Stack.Screen component={TabNavigator} name={AppRoutes.TabNavigator} />
      </Stack.Group>

      <Stack.Group screenOptions={modalGroupOptions}>
        <Stack.Screen component={ModalScreen} name={AppRoutes.Modal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
