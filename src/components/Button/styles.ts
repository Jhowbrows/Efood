import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${Cores.RosaEscuro};
  color: ${Cores.branco};
  font-size: 14px;
  padding: 4px 84px;
  width: 100%;
  display: block;
  margin: 0 auto;
`

export const ButtonLink = styled(Link)`
  background-color: ${Cores.RosaEscuro};
  color: ${Cores.branco};
  font-size: 14px;
  padding: 4px 8px;
  width: 100%;
  margin: 0 auto;
`
