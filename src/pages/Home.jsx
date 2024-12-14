import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home
