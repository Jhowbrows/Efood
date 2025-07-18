import { Link, useParams } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import fundoImg from '../../assets/images/fundoHeader.png'

import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurant: Restaurant
}

const PerfilHeader = ({ restaurant }: Props) => {
  const { id } = useParams()

  return (
    <>
      <div>
        <S.HeaderContainer style={{ backgroundImage: `url(${fundoImg})` }}>
          <S.LogoContainer className="container">
            <S.TextLink to="/">Restaurantes</S.TextLink>
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
            <S.Cart>0 Produto(s) no carrinho</S.Cart>
          </S.LogoContainer>
        </S.HeaderContainer>
        <S.Banner style={{ backgroundImage: `url(${restaurant?.capa})` }}>
          <S.BannerContainer className="container">
            <S.BannerText>{restaurant.tipo}</S.BannerText>
            <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
          </S.BannerContainer>
        </S.Banner>
      </div>
    </>
  )
}

export default PerfilHeader
