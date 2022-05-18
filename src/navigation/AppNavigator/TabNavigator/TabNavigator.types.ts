import { StackScreenProps } from '@react-navigation/stack'

import { TabRoutes } from '~/navigation'

export interface TabStackParams extends Record<string, object | undefined> {
  [TabRoutes.Home]: undefined
  [TabRoutes.Settings]: undefined
}

export type TabStackScreenProps<T extends TabRoutes> = StackScreenProps<TabStackParams, T>
