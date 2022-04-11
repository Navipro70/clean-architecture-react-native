import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import { useTheme } from 'styled-components/native'

type Props = ActivityIndicatorProps

export const Spinner = (props: Props) => {
  const { colors } = useTheme()

  return <ActivityIndicator color={colors.iconsFirst} size="small" {...props} />
}
