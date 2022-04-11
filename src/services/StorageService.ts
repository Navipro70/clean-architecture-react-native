import { MMKV } from 'react-native-mmkv'

export enum STORAGE_KEYS {
  THEME_VALUE = 'THEME_VALUE',
}

class StorageServiceClass {
  private _instance: MMKV

  constructor() {
    this._instance = new MMKV({ id: 'mmkv.storage.service' })
  }

  get instance(): MMKV {
    return this._instance
  }

  setAppState(key: STORAGE_KEYS, value = 'true') {
    this._instance?.set(key, value)
  }

  getAppState(key: STORAGE_KEYS) {
    const data = this._instance?.getString(key)
    return !!data
  }

  getLocalValue(key: STORAGE_KEYS) {
    const data = this._instance?.getString(key)
    return data ? JSON.parse(data) : undefined
  }

  getThemeValue() {
    return this._instance?.getString(STORAGE_KEYS.THEME_VALUE)
  }
}

export const StorageService = new StorageServiceClass()
