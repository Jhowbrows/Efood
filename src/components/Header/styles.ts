import styled from 'styled-components'
import { breakPoints, Cores } from '../../styles'

export const HeaderContainer = styled.div`
  height: 380px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`

export const Logo = styled.div`
  padding-top: 64px;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`

export const TituloHeader = styled.h2`
  text-align: center;
  color: ${Cores.RosaEscuro};
  font-size: 36px;
  font-weight: bold;
  margin-top: 138px;

  @media (max-width: 768px) {
    margin-top: 120px;
    font-size: 24px;
  }
`
