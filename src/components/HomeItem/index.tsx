import Button from '../Button'

import ReviewStar from '../../assets/images/ReviewStar.png'

import * as S from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  review: string
  image: string
  description: string
  infos: string[]
}

const HomeItem = ({ description, image, infos, review, title }: Props) => (
  <S.Card>
    <S.ContainerImg>
      <img src={image} alt={title} />
      <S.ContainerTag>
        {infos.map((info) => (
          <Tag size="big" key={info}>
            {info}
          </Tag>
        ))}
      </S.ContainerTag>
    </S.ContainerImg>
    <S.ContainerDesc>
      <S.ContainerReview>
        <h3>{title}</h3>
        <S.Review>
          <p>{review}</p>
          <img src={ReviewStar} alt="Estrela" />
        </S.Review>
      </S.ContainerReview>
      <S.Descrição>{description}</S.Descrição>
      <Button
        type="link"
        to="/Perfil"
        title="Saiba Mais sobre este restaurante"
      >
        Saiba Mais
      </Button>
    </S.ContainerDesc>
  </S.Card>
)

export default HomeItem
