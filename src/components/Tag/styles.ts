import styled from 'styled-components'
import { Cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.RosaEscuro};
  color: ${Cores.Bege};
  font-size: 12px;
  max-width: ${(props) => (props.size === 'big' ? '180px' : '80px')};
  margin: 8px;
  text-align: center;
  text-align: center;
`

export const TagText = styled.p`
  width: 100%;
  text-align: center;
  padding: 6px 4px;
  height: 23px;
  display: inline-block;
  vertical-align: middle;
`
