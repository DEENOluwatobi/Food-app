import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, MainContainer, CreateContainer } from './components'

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex-col bg-primary">
        <Header />

        <main className='px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer/>} />
            <Route path='/createItem' element={<CreateContainer/>} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
    
  )
}

export default App