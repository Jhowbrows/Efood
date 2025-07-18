import * as S from './styles'

type Props = {
  img: string
  title: string
  description: string
  imgAlt: string
}

const Food = ({ description, img, title, imgAlt }: Props) => {
  const reduceDescription = (descricao: string) => {
    return descricao.length > 150 ? descricao.slice(0, 150) + '...' : descricao
  }

  return (
    <>
      <S.FoodContainer>
        <S.ImgContainer>
          <img src={img} alt={imgAlt} />
        </S.ImgContainer>
        <S.DescriptionContainer>
          <h3>{title}</h3>
          <p>{reduceDescription(description)}</p>
          <S.FoodButton>Adicionar ao Carrinho</S.FoodButton>
        </S.DescriptionContainer>
      </S.FoodContainer>
    </>
  )
}

export default Food
