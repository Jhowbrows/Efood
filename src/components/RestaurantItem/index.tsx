import Button from '../Button'

import ReviewStar from '../../assets/images/ReviewStar.png'

import * as S from './styles'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  review: number
  image: string
  description: string
  infos: TagInfo[]
}

export type TagInfo = {
  text: string
  size: 'big' | 'small'
}

export const reduceDescription = (description: string) => {
  if (description.length > 170) {
    return description.slice(0, 160) + '...'
  }
  return description
}

const RestaurantItem = ({
  description,
  image,
  infos,
  review,
  title,
  id
}: Props) => (
  <S.Card>
    <S.ContainerImg>
      <img src={image} alt={title} />
      <S.ContainerTag>
        {infos.map((info) => (
          <Tag size="big" key={info.text}>
            {info.text}
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
      <S.Descrição>{reduceDescription(description)}</S.Descrição>
      <Button
        type="link"
        to={`/Perfil/${id}`}
        title="Saiba Mais sobre este restaurante"
      >
        Saiba Mais
      </Button>
    </S.ContainerDesc>
  </S.Card>
)

export default RestaurantItem
