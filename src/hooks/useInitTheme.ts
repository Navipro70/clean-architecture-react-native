import { useEffect, useState } from 'react'
import { StatusBarStyle, useColorScheme } from 'react-native'

import { StorageService, STORAGE_KEYS } from '~/services'
import { darkTheme, lightTheme, navDarkTheme, navLightTheme } from '~/theme'
import { ThemeValue } from '~/types'

export const useInitTheme = () => {
  const [themeValue, setThemeValue] = useState(ThemeValue.System)
  const colorScheme = useColorScheme()

  const onChangeTheme = (value: ThemeValue) => {
    StorageService.setAppState(STORAGE_KEYS.THEME_VALUE, value)
    setThemeValue(value)
  }

  const isDark = (() => {
    if (themeValue === ThemeValue.System) {
      return colorScheme === 'dark'
    } else if (themeValue === ThemeValue.Dark) {
      return true
    } else {
      return false
    }
  })()

  useEffect(() => {
    const initTheme = () => {
      const storedTheme = StorageService.getThemeValue()
      if (!storedTheme) {
        onChangeTheme(ThemeValue.System)
      } else {
        setThemeValue(storedTheme as ThemeValue)
      }
    }
    initTheme()
  }, [])

  return {
    theme: {
      ...(isDark ? darkTheme : lightTheme),
      themeValue,
      onChangeTheme,
    },
    navTheme: isDark ? navDarkTheme : navLightTheme,
    statusBarProps: {
      barStyle: (isDark ? 'light-content' : 'dark-content') as StatusBarStyle,
      backgroundColor: isDark
        ? darkTheme.colors.backgroundFirst
        : lightTheme.colors.backgroundFirst,
    },
  }
}
