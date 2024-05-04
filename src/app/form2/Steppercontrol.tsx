import React from 'react'

const Steppercontrol = () => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <button className='bg-green-50  uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>Back</button>
        <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>Next</button>
    </div>
  )
}

export default Steppercontrol