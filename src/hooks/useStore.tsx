import React, { createContext, ReactNode, useContext } from 'react'

import { rootStore, RootStore } from '~/store'

const StoreContext = createContext<RootStore | null>(null)

interface IChildren {
  children: ReactNode
}

export function StoreProvider({ children }: IChildren) {
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
}

export function useStore(): RootStore {
  const value = useContext(StoreContext)

  if (value === undefined) {
    throw new Error('useStore must be used within RootStoreProvider')
  }

  return value as RootStore
}
