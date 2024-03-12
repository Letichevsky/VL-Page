import './Home.css'

import Welcome from '../components/Welcome/Welcome'
import AboutUs from '../components/AboutUs/AboutUs';
import About from '../components/About/About';
import Header from '../components/Header/Header';
// import Partners from '../components/Partners/Partners';
import Clients from '../components/Clients/Clients';
import Portfolio from '../components/Portfolio/Portfolio';
import Products from '../components/Products/Products';

function Home() {
  return (
    <div className='home'>
        <Header/>
      <Welcome/>
      <AboutUs/>
      <Products/>
      <About/>
      {/* <Partners/> */}
      <Clients/>
      <Portfolio/>
    </div>
  )
}

export default Home