import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const Attention = (props: SvgProps) => {
  const { colors } = useTheme()

  return (
    <Svg color={colors.white} fill="none" height={24} width={24} {...props}>
      <Path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 16v-4M12 8h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  )
}
