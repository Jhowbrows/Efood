import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PerfilHeader from '../../components/PerfilHeader'

import { FoodList } from '../../components/FoodList'
import Footer from '../../components/Footer'

import { useGetRestaurantSelectedQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id!)

  if (restaurantFood) {
    return (
      <>
        <PerfilHeader restaurant={restaurantFood} />
        <div className="container">
          <FoodList
            restaurant={restaurantFood}
            pedido={{
              id: 0,
              nome: '',
              foto: '',
              preco: 0
            }}
          />
        </div>
        <Cart />
        <Footer />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Perfil
