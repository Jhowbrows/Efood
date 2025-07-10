import Cardapio from '../../models/Cardapio'
import Food from '../Food'
import * as S from './styles'

type Props = {
  cardapios: Cardapio[]
}

export const FoodList = ({ cardapios }: Props) => (
  <>
    <S.FoodListContainer>
      <S.List>
        {cardapios.map((cardapio) => (
          <Food
            key={cardapio.id}
            img={cardapio.img}
            name={cardapio.name}
            descricao={cardapio.descricao}
          />
        ))}
      </S.List>
    </S.FoodListContainer>
  </>
)
