import HomeItem from '../HomeItem'

import * as S from './styles'

import Restaurant from '../../models/Restaurants'

export type Props = {
  restaurants: Restaurant[]
}

const HomeList = ({ restaurants }: Props) => (
  <S.ListContainer>
    <div className="container">
      <S.List>
        {restaurants.map((restaurant) => (
          <HomeItem
            key={restaurant.id}
            image={restaurant.image}
            description={restaurant.description}
            review={restaurant.review}
            title={restaurant.title}
            infos={restaurant.infos}
          />
        ))}
      </S.List>
    </div>
  </S.ListContainer>
)

export default HomeList
