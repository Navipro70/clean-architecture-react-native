import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTheme } from 'styled-components/native'

import { Icons } from '~/assets'
import { HomeScreen, SettingsScreen } from '~/screens'

import { TabRoutes } from '../../Routes'

import { tabScreensOption } from './TabNavigator.options'

export interface TabStackParams extends Record<string, object | undefined> {
  [TabRoutes.Home]: undefined
  [TabRoutes.Settings]: undefined
}

const Stack = createBottomTabNavigator<TabStackParams>()

export const TabNavigator = () => {
  const { colors } = useTheme()

  return (
    <Stack.Navigator screenOptions={tabScreensOption(colors)}>
      <Stack.Screen
        component={HomeScreen}
        name={TabRoutes.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: Icons.Home,
        }}
      />
      <Stack.Screen
        component={SettingsScreen}
        name={TabRoutes.Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: Icons.Settings,
        }}
      />
    </Stack.Navigator>
  )
}
