import { useState } from 'react'

import * as S from './styles'

import RestaurantItem from '../RestaurantItem'

import { Restaurant } from '../../pages/Home'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getRestaurantTags = (
    restaurant: Restaurant
  ): { text: string; size: 'big' | 'small' }[] => {
    const tags: { text: string; size: 'big' | 'small' }[] = []

    if (restaurant.destacado) {
      tags.push({ text: 'Destaque do dia', size: 'big' })
    }

    if (restaurant.tipo) {
      tags.push({ text: restaurant.tipo, size: 'small' })
    }

    return tags
  }
  return (
    <>
      <S.ListContainer>
        <div className="container">
          <S.List>
            {restaurants.map((restaurant) => (
              <RestaurantItem
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.capa}
                description={restaurant.descricao}
                review={restaurant.avaliação}
                title={restaurant.titulo}
                infos={getRestaurantTags(restaurant)}
              />
            ))}
          </S.List>
        </div>
      </S.ListContainer>
    </>
  )
}

export default RestaurantList
