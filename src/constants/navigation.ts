import { LinkingOptions } from '@react-navigation/native'

import { AppRoutes, AppStackParams, TabRoutes } from '~/navigation'

const prefixes = ['architecture://', 'https://architecture.com', 'https://*.architecture.com']

const config: LinkingOptions<AppStackParams>['config'] = {
  screens: {
    [AppRoutes.TabNavigator]: {
      screens: {
        [TabRoutes.Settings]: {
          path: 'settings',
        },
      },
    },
    [AppRoutes.Profile]: {
      path: 'user',
    },
  },
} as LinkingOptions<AppStackParams>['config']

export const linking: LinkingOptions<AppStackParams> = {
  prefixes,
  config,
} as LinkingOptions<AppStackParams>
