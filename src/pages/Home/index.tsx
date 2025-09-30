import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetActionGamesQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } =
    useGetActionGamesQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        title="Promoções"
        games={onSaleGames}
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        title="Em breve"
        games={soonGames}
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
