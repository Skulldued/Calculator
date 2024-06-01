import React from 'react'
import Button from './component/Button'

const App = () => {
  return (
    <div className='bg-[#C4CCE1] h-screen text-white p-28'>
      <div className='flex  justify-center items-center '>
          <div className='w-[300px] min-h-[400px] bg-[#243042] px-6 border rounded-[20px] border-blue-700'>
          <div className='w-full h-[100px] flex items-end'>
          <input type="text" className='w-full py-2 bg-gray-100 rounded-lg px-3 text-black font-bold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-0' placeholder='Values' />
          </div>
          <Button/>
          </div>
      </div>
    </div>
  )
}

export default App
