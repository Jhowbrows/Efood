import Header from '../../components/Header'

import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

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
