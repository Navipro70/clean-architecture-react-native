import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const RightChevron = (props: SvgProps) => {
  const { colors } = useTheme()

  return (
    <Svg color={colors.iconsFirst} fill="none" height={14} viewBox="0 0 8 14" width={8} {...props}>
      <Path
        d="M1 13l6-6-6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}
