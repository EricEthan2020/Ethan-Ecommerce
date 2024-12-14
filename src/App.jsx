import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import CategorySection from './component/CategorySection';
import ProductSection from './component/ProductSection';
import Layout from './pages/Layout';
const App = () => {

  return (
    <>
      <Header/>
      <CategorySection />
      <ProductSection/>
      <Footer />
      {/* <Layout/> */}
    </>

  )
}

export default App
