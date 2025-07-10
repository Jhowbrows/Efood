import type { ReactNode } from 'react'

import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: ReactNode
}

const Tag = ({ children, size = 'small' }: Props) => (
  <S.TagContainer size={size}>
    <S.TagText>{children}</S.TagText>
  </S.TagContainer>
)

export default Tag
