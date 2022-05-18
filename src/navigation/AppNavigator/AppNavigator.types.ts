import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import { AppRoutes } from '../Routes'

import { TabStackParams } from './TabNavigator'

export interface AppStackParams extends Record<string, object | undefined> {
  [AppRoutes.Initial]: undefined
  [AppRoutes.TabNavigator]: NavigatorScreenParams<TabStackParams>
  [AppRoutes.Profile]: { name?: string }

  [AppRoutes.Modal]: undefined
}

export type AppStackScreenProps<T extends AppRoutes> = StackScreenProps<AppStackParams, T>
