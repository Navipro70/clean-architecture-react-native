import { configurePersistable } from 'mobx-persist-store'
import { MMKV } from 'react-native-mmkv'

import { HomeStore } from './HomeStore'

const storage = new MMKV({
  id: 'mmkv.persist.store',
})

configurePersistable(
  {
    storage: {
      setItem: (key, data) => storage.set(key, data),
      getItem: (key) => storage.getString(key) as string,
      removeItem: (key) => storage.delete(key),
    },
    expireIn: Number.MAX_SAFE_INTEGER,
    stringify: true,
    debugMode: false,
  },
  { delay: 200, fireImmediately: false },
)

export class RootStore {
  homeStore: HomeStore

  constructor() {
    this.homeStore = new HomeStore(this)
  }
}

export const rootStore = new RootStore() // SINGLETON
