import { useEffect, useState } from 'react'
import Header from '../../components/Header'

import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

export type Pedido = {
  id: number
  nome: string
  foto: string
  preco: number
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliação: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantList restaurants={restaurants} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
