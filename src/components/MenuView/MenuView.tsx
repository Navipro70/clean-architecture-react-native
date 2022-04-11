import React from 'react'

import { Icons } from '~/assets'

import { Container, Title, ItemContainer, ItemText } from './MenuView.style'

export interface IMenuItem {
  text: string
  action: () => void
}

interface Props {
  title: string
  items: IMenuItem[]
}

export const MenuView = ({ title, items }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {items.map(({ text, action }, index) => (
        <ItemContainer isLast={index === items.length - 1} key={text} onPress={action}>
          <ItemText children={text} />
          <Icons.RightChevron />
        </ItemContainer>
      ))}
    </Container>
  )
}
