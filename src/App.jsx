import React, { useState } from 'react'
import Control from './components/Control'


const App = () => {
  const [frameZoom, setFramezoom] = useState(false)

  const toggleZoom = () => {
    setFramezoom(!frameZoom)
  }
  return (
    
          <div className="w-full h-screen grid place-items-center">
            <div className={`${
          frameZoom && 'min-w-[97vw] min-h-[97vh]'
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}>
              <Control toggleZoom={toggleZoom} frameZoom={frameZoom} />
            </div>
          </div>
    
  )
}

export default App