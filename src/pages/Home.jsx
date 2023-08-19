import Header from '../components/Header';
import MainBanner from '../components/MainBanner'
import Footer from '../components/Footer';
import MainProducts from '../components/MainProducts';
import ProductsList from '../components/ProductsList';

function Home() {
  return (
    <>
      <Header></Header>
      <MainBanner></MainBanner>
      <MainProducts></MainProducts>
      <ProductsList></ProductsList>
      <Footer></Footer>
    </>
  )
}

export default Home