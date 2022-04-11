import range from 'lodash/range'
import { makeAutoObservable, runInAction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

import { delay } from '~/utils'

import { RootStore } from './RootStore'

interface IUser {
  id: string
  name: string
  age: number
}

export class HomeStore {
  rootStore: RootStore

  isLoading = false
  users: IUser[] = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
    void makePersistable(this, { name: 'HomeStore', properties: ['users'] })
  }

  setUsers = async () => {
    this.isLoading = true
    await delay(2500)
    runInAction(() => {
      this.users = range(5).map(() => ({
        id: `${Math.random()}`,
        name: `Name${Math.random()}`,
        age: Math.round(Math.random() * 100),
      }))
      this.isLoading = false
    })
  }
}
