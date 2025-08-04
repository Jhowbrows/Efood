import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderContainer = styled.div`
  height: 380px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;
`

export const Logo = styled.div`
  padding-top: 64px;
  text-align: center;
`

export const TituloHeader = styled.h2`
  text-align: center;
  color: ${Cores.RosaEscuro};
  font-size: 36px;
  font-weight: bold;
  margin-top: 138px;

  @media (max-width: 768px) {
    margin-top: 120px;
  }
`
