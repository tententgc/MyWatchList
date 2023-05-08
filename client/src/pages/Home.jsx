import React from 'react'
import Header from '../components/Header.jsx' 
const Home = () => {
  return (
    <>
    <Header /> 
    <div className="container">
        <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-4xl font-bold">My Collection</h1>
        </div>
    </div>
    </>
  )
}

export default Home