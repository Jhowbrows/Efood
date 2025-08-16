import styled from 'styled-components'
import { breakPoints, Cores } from '../../styles'

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
  padding: 50px 120px;

  @media (max-width: 768px) {
    padding: 0 8px;
    gap: 16px;
  }
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
  cursor: pointer;

  @media (max-width: ${breakPoints.tablet}) {
    text-align: center;
  }
`
export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 100px 32px 100px;
  color: ${Cores.branco};
  font-size: 32px;
  font-weight: 900;
  z-index: 0;
  position: relative;

  .container {
    justify-content: space-between;
  }

  @media (max-width: ${breakPoints.tablet}) {
    padding: 24px 10px;
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
