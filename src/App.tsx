import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LogBox, Platform, StatusBar, UIManager } from 'react-native'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
import { enableFreeze } from 'react-native-screens'
import { ThemeProvider } from 'styled-components/native'

import { StyledSafeAreaProvider, ErrorBoundary } from './components'
import { SnackbarProvider, StoreProvider, useInitTheme } from './hooks'
import { AppNavigator } from './navigation'
import { StorageService } from './services'

if (!__DEV__) {
  console.log = () => {}
  console.warn = () => {}
  console.error = () => {}
}

if (__DEV__) {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ])
  // TODO add debuger for store
  // addMiddleware(store, createMstDebugger(store));
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental)
  UIManager.setLayoutAnimationEnabledExperimental(true)

enableFreeze(true)

export const App = () => {
  const { theme, navTheme, statusBarProps } = useInitTheme()

  if (__DEV__) initializeMMKVFlipper({ default: StorageService.instance })

  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaProvider>
        <ErrorBoundary>
          <StoreProvider>
            <NavigationContainer theme={navTheme}>
                <SnackbarProvider>
                  <StatusBar {...statusBarProps} />
                  <AppNavigator />
                </SnackbarProvider>
            </NavigationContainer>
          </StoreProvider>
        </ErrorBoundary>
      </StyledSafeAreaProvider>
    </ThemeProvider>
  )
}
