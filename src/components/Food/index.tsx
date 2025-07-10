import * as S from './styles'

type Props = {
  img: string
  name: string
  descricao: string
}

const Food = ({ descricao, img, name }: Props) => (
  <>
    <S.FoodContainer>
      <S.ImgContainer>
        <img src={img} alt={name} />
      </S.ImgContainer>
      <S.DescriptionContainer>
        <h3>{name}</h3>
        <p>{descricao}</p>
      </S.DescriptionContainer>
      <S.FoodButton>Adicionar ao Carrinho</S.FoodButton>
    </S.FoodContainer>
  </>
)

export default Food
