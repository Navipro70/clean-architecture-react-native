import { DefaultTheme as LightTheme, Theme } from '@react-navigation/native'
import { DefaultTheme } from 'styled-components/native'

import { fonts } from '~/components'

import { commonThemeColors } from './common'

export const lightThemeColors = {
  systemPrimary: '#000000',
  systemSecondary: '#FFFFFF',

  iconsFirst: '#333333',
  iconsSecond: 'rgba(51, 3, 0, 0.5)',

  textFirst: '#000000',
  textSecondary: '#FFFFFF',

  backgroundFirst: '#FFFFFF',

  separatorFirst: 'rgba(0, 0, 0, 0.05)',
}

export const lightTheme: Omit<DefaultTheme, 'onChangeTheme' | 'themeValue'> = {
  colors: {
    ...commonThemeColors,
    ...lightThemeColors,
  },
  fonts,
  indicatorStyle: 'black',
  isDark: false,
}

export const navLightTheme: Theme = {
  dark: false,
  colors: {
    primary: lightThemeColors.systemPrimary,
    background: lightThemeColors.backgroundFirst,
    text: lightThemeColors.textFirst,
    border: lightThemeColors.separatorFirst,
    card: lightThemeColors.backgroundFirst,
    notification: LightTheme.colors.notification,
  },
}
