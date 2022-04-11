import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const Home = (props: SvgProps) => {
  const { colors } = useTheme()

  return (
    <Svg color={colors.iconsFirst} fill="none" height={24} width={24} {...props}>
      <Path
        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M9 22V12h6v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  )
}
