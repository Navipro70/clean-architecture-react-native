import { Dimensions, Platform } from 'react-native'

import { platformSelect } from '~/utils'

export const IS_IOS = Platform.OS === 'ios'

export const IOS_BUNDLE_ID = 'com.project'
export const ANDROID_APP_ID = 'com.project.app'

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export const FontNames = {
  FredokaRegular: platformSelect({ ios: 'Fredoka-Regular', android: 'Fredoka Regular' }),
} as const
