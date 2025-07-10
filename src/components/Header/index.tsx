import * as S from './styles'

import fundoHeader from '../../assets/images/fundoHeader.png'
import logo from '../../assets/images/logo.png'

export const Header = () => (
  <S.HeaderContainer style={{ backgroundImage: `url(${fundoHeader})` }}>
    <S.Logo>
      <img src={logo} alt="Efood" />
    </S.Logo>
    <S.TituloHeader>
      Viva experiências gastronômicas
      <br /> no conforto da sua casa
    </S.TituloHeader>
  </S.HeaderContainer>
)

export default Header
