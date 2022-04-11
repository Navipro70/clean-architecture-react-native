import { DarkTheme, Theme } from '@react-navigation/native'
import { DefaultTheme } from 'styled-components/native'

import { fonts } from '~/components'

import { commonThemeColors } from './common'

export const darkThemeColors = {
  systemPrimary: '#FFFFFF',
  systemSecondary: '#000000',

  iconsFirst: '#FFFFFF',
  iconsSecond: 'rgba(255, 255, 255, 0.5)',

  textFirst: '#FFFFFF',
  textSecondary: '#000000',

  backgroundFirst: '#141414',

  separatorFirst: 'rgba(255, 255, 255, 0.1)',
}

export const darkTheme: Omit<DefaultTheme, 'onChangeTheme' | 'themeValue'> = {
  colors: {
    ...commonThemeColors,
    ...darkThemeColors,
  },
  fonts,
  indicatorStyle: 'white',
  isDark: true,
}

export const navDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: darkThemeColors.systemPrimary,
    background: darkThemeColors.backgroundFirst,
    text: darkThemeColors.textFirst,
    border: darkThemeColors.separatorFirst,
    card: darkThemeColors.backgroundFirst,
    notification: DarkTheme.colors.notification,
  },
}
