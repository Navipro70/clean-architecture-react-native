declare module '*.png' {
  export default '' as string
}
declare module '*.json'

export type Timeout = ReturnType<typeof setInterval>

import { fonts } from '~/components'
import { AppStackParams } from '~/navigation'
import { commonThemeColors, darkThemeColors } from '~/theme'

import { ThemeValue } from './types'

type ThemeColorsType = typeof commonThemeColors & typeof darkThemeColors
type ThemeFontsType = typeof fonts

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    isDark: boolean
    indicatorStyle: 'black' | 'white'
    themeValue: ThemeValue
    colors: ThemeColorsType
    fonts: ThemeFontsType
    onChangeTheme: (value: ThemeValue) => void
  }
}

declare global {
  namespace ReactNavigation {
    export type RootParamList = AppStackParams
  }
}
