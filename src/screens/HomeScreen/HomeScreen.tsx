import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Spinner } from '~/components'
import { useStore } from '~/hooks'

import { Container, Title } from './HomeScreen.style'

export const HomeScreen = observer(() => {
  const { top } = useSafeAreaInsets()
  const {
    homeStore: { isLoading, users, setUsers },
  } = useStore()

  useEffect(() => {
    void setUsers()
  }, [])

  return (
    <Container topInsert={top}>
      {isLoading ? <Spinner /> : <Title children={users[0]?.age} />}
    </Container>
  )
})
