import React from 'react'

const Button = () => {
    const number = ["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0"];
  return (
    <div className='mt-6 w-full'>
      <div className='p-3 flex flex-wrap'>
          {
            number.map((items,index)=>(
               <div key={index} className=' '>
                {/* linear-gradient(145deg, #29293c, #313148); */}
                 <button className='text-white  su_shadow text-xl   bg-[#FA4000] w-[45px] h-[45px] px-2 py-2 my-2 mx-[15px]'>{items}</button>
               </div>

            ))
          }
      </div>
    </div>
  )
}

export default Button
