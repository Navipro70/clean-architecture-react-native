import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { DefaultTheme } from 'styled-components/native'

import { FontNames } from '~/constants'

const IPHONE_X_SIZE = 93
const DEFAULT_SIZE = 58

export const tabScreensOption = (colors: DefaultTheme['colors']): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primaryFirst,
  tabBarInactiveTintColor: colors.iconsSecond,
  tabBarStyle: {
    elevation: 0,
    borderTopWidth: 2,
    borderTopColor: colors.separatorFirst,
    backgroundColor: colors.backgroundFirst,
    height: isIphoneX() ? IPHONE_X_SIZE : DEFAULT_SIZE,
  },
  tabBarItemStyle: {
    alignSelf: 'center',
    paddingTop: 4,
    paddingBottom: 8,
  },
  tabBarLabelStyle: {
    fontFamily: FontNames.FredokaRegular,
    fontSize: 11,
    letterSpacing: 0.05,
  },
})
