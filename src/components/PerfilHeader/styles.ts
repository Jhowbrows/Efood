import styled from 'styled-components'
import { Cores } from '../../styles'

import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;
  padding: 64px 0;

  .container {
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.RosaEscuro};
`

export const Cart = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.RosaEscuro};
`
export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerContainer = styled.div`
  color: ${Cores.branco};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px 0 32px 0;

  .container {
    justify-content: space-between;
  }
`

export const BannerText = styled.span`
  font-size: 32px;
  font-weight: 100;
  display: inline;
`

export const RestaurantName = styled.span`
  font-size: 32px;
  font-weight: bold;
`
