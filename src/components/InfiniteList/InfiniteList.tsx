import { useNetInfo } from '@react-native-community/netinfo'
import { useScrollToTop } from '@react-navigation/native'
import React, { useRef } from 'react'
import { FlatListProps, RefreshControl } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'

import { Spinner } from '../Spinner'

import { FooterContainer } from './InfiniteList.style'

export interface InfiniteListProps<T> extends FlatListProps<T> {
  onRefresh?: () => void
  onLoadMore: () => void
  isLoadingMore: boolean
  hasMore: boolean
  refreshing?: boolean
  useBarScroll?: boolean
  refreshControlStyle?: object
}

export const InfiniteList = <T,>({
  onRefresh,
  onLoadMore,
  isLoadingMore,
  hasMore,
  refreshing,
  useBarScroll = false,
  contentContainerStyle,
  refreshControlStyle,
  data,
  ...props
}: InfiniteListProps<T>) => {
  const { isConnected } = useNetInfo()
  const theme = useTheme()
  const ref = useRef(null)
  useScrollToTop(ref)

  const onEndReached = () => {
    if (isConnected && !isLoadingMore && hasMore) {
      onLoadMore()
    }
  }

  const Footer = () => (
    <FooterContainer>
      <Spinner />
    </FooterContainer>
  )

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      {...props}
      ListFooterComponent={() => (isLoadingMore ? <Footer /> : null)}
      contentContainerStyle={contentContainerStyle}
      data={data}
      indicatorStyle={theme.indicatorStyle}
      ref={useBarScroll ? ref : undefined}
      refreshControl={
        onRefresh && (
          <RefreshControl
            colors={[theme.colors.iconsFirst]}
            refreshing={Boolean(refreshing)}
            style={refreshControlStyle}
            tintColor={theme.colors.iconsFirst}
            onRefresh={onRefresh}
          />
        )
      }
      onEndReached={onEndReached}
    />
  )
}
