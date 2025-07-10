import { Link } from 'react-router-dom'

import * as S from './styles'

import fundoHeader from '../../assets/images/fundoHeader.png'
import logo from '../../assets/images/logo.png'
import restaurantImg from '../../assets/images/FundoRestaurant.png'

const PerfilHeader = () => (
  <>
    <div>
      <S.HeaderContainer style={{ backgroundImage: `url(${fundoHeader})` }}>
        <S.LogoContainer className="container">
          <S.TextLink to="/">Restaurantes</S.TextLink>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <S.Cart>0 Produto(s) no carrinho</S.Cart>
        </S.LogoContainer>
      </S.HeaderContainer>
      <S.Banner style={{ backgroundImage: `url(${restaurantImg})` }}>
        <S.BannerContainer className="container">
          <S.BannerText>italiana</S.BannerText>
          <S.RestaurantName>La Dolce Vita Trattoria</S.RestaurantName>
        </S.BannerContainer>
      </S.Banner>
    </div>
  </>
)

export default PerfilHeader
