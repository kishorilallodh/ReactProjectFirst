import React from 'react'
import Card from '../Components/Card'


const Home = () => {
  return (
 <>
   <div className='w-full h-[500px] text-center pt-30 bg-emerald-100'>
     <h1 className='w-[850px] mx-auto text-green-800 font-bold text-6xl'>Empowering AI Innovators to Build and Collaborate</h1>
     <p className='pt-5 w-[850px] mx-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae pariatur ad libero, at tenetur modi dolorem ullam nostrum molestias quo laborum aut mollitia architecto.</p>
     <input type="text" placeholder='explore for more' className='bg-white w-[300px] text-black-400 rounded-md px-2 p-2 mt-12 outline-none' />
     <button className='bg-green-800 rounded-md px-2 py-2 m-10 text-white cursor-pointer'>Explore more</button>
    
    </div>
   <div className='flex'>
   <Card/>
    
   </div>
 </>
    
  
  )
}

export default Home
