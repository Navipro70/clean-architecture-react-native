import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'

import { MenuView } from '~/components'
import { useSnackbar } from '~/hooks'
import { AppRoutes, TabRoutes, TabStackParams } from '~/navigation'
import { ThemeValue } from '~/types'

import { Container } from './SettingsScreen.style'

type Props = StackScreenProps<TabStackParams, TabRoutes.Settings>

export const SettingsScreen = ({ navigation }: Props) => {
  const { onChangeTheme } = useTheme()
  const { top } = useSafeAreaInsets()
  const snackbar = useSnackbar()

  const setDarkTheme = () => onChangeTheme(ThemeValue.Dark)
  const setLightTheme = () => onChangeTheme(ThemeValue.Light)
  const setSystemTheme = () => onChangeTheme(ThemeValue.System)
  const onOpenModal = () => navigation.navigate(AppRoutes.Modal)
  const onOpenSnackbar = () => snackbar.open('This is a snackbar')

  const themeItems = [
    { text: 'Dark theme', action: setDarkTheme },
    { text: 'Light theme', action: setLightTheme },
    { text: 'System theme', action: setSystemTheme },
  ]
  const infoItems = [
    { text: 'Show modal', action: onOpenModal },
    { text: 'Show snackbar', action: onOpenSnackbar },
  ]

  return (
    <Container topInsert={top}>
      <MenuView items={themeItems} title="Theme" />
      <MenuView items={infoItems} title="Info" />
    </Container>
  )
}
