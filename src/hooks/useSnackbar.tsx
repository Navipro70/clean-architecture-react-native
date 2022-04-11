import React, { createContext, FC, useRef, useContext, useState, useMemo, useCallback } from 'react'
import { LayoutChangeEvent } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import { Snackbar } from '~/components'
import { Timeout } from '~/types'

interface ISnackbar {
  open: (text: string, autoClose?: boolean) => void
  close: () => void
}

const Context = createContext<ISnackbar>(null as never)

const OUT_TIMER = 3500

const TOP_OFFSET = -(getStatusBarHeight() + 60)

export const SnackbarProvider: FC = ({ children }) => {
  const alertHeight = useRef(0)
  const showAnimation = useSharedValue(TOP_OFFSET)
  const timerRef = useRef<Timeout | null>(null)
  const [title, setTitle] = useState('')

  const onLayout = (e: LayoutChangeEvent) => (alertHeight.current = e.nativeEvent.layout.height)

  const open = useCallback(
    (text: string, autoClose = true) => {
      showAnimation.value = withTiming(0, { duration: 500 })
      setTitle(text)

      if (autoClose) {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(close, OUT_TIMER)
      }
    },
    [timerRef.current],
  )

  const close = useCallback(() => {
    showAnimation.value = withTiming(-alertHeight.current, {
      duration: 500,
    })

    if (timerRef.current) clearTimeout(timerRef.current)
  }, [timerRef.current])

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <Context.Provider value={value}>
      <Snackbar animation={showAnimation} close={close} text={title} onLayout={onLayout} />
      {children}
    </Context.Provider>
  )
}

export const useSnackbar = () => {
  const value = useContext(Context)

  if (!value) throw new Error("useSnackbar can't be used outside SnackbarProvider")

  return value
}
