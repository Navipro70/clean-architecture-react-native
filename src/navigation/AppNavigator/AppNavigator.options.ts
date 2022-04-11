import { StackNavigationOptions } from '@react-navigation/stack'

import { FontNames } from '~/constants'

export const cardGroupOptions: StackNavigationOptions = {
  headerShown: false,
  headerTitleStyle: {
    fontFamily: FontNames.FredokaRegular,
    fontSize: 16,
  },
}

export const modalGroupOptions: StackNavigationOptions = {
  presentation: 'modal',
  headerShown: false,
  headerTitleStyle: {
    fontFamily: FontNames.FredokaRegular,
    fontSize: 16,
  },
}
