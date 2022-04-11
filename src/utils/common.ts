import omit from 'lodash/omit'
import { Linking, Platform } from 'react-native'

export const openUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    void Linking.openURL(url)
  }
}

export const delay = async (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

type hitSlopFilter = 'top' | 'bottom' | 'left' | 'right'

export const getHitSlop = (v: number, filter: hitSlopFilter[] = []) =>
  omit(
    {
      top: v,
      bottom: v,
      left: v,
      right: v,
    },
    filter,
  )

export const platformSelect = <T>(options: { android: T; ios: T }) => Platform.select(options) as T
