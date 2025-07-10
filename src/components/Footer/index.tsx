import * as S from './styles'

import logo from '../../assets/images/logo.png'

import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/facebook.png'
import X from '../../assets/images/X.png'

const Footer = () => (
  <S.FooterContainer>
    <S.Logo>
      <img src={logo} alt="Efood" />
    </S.Logo>
    <S.Social>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={X} alt="x" />
    </S.Social>
    <S.FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </S.FooterText>
  </S.FooterContainer>
)

export default Footer
