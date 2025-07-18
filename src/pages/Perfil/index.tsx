import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PerfilHeader from '../../components/PerfilHeader'

import { FoodList } from '../../components/FoodList'
import Footer from '../../components/Footer'

import type { Restaurant } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <PerfilHeader restaurant={restaurant} />
      <div className="container">
        <FoodList restaurant={restaurant} />
      </div>
      <Footer />
    </>
  )
}

export default Perfil
