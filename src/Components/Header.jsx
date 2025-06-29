import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
let navigate = useNavigate();


function loginhandle(){
  navigate('/login')
}



  return (
    <>
    <div className='w-full flex justify-between align-center px-9 py-2 border-b-4 border-green-800'>
          <div>
              <h1 className='text-[30px] italic font-bold  bg-gradient-to-b from-green-800 to-green-300 bg-clip-text text-transparent'>StartUP</h1>
          </div>
       <div className='flex justify-center align-center pt-2 text-xl gap-7'> 
           <ul className='flex  gap-x-8'>    
             <li className='text-xl hover:text-green-800 hover:underline'><Link to='/'>Home</Link></li>
             <li className='text-xl hover:text-green-800 hover:underline '><Link to='/about'>About</Link></li>
             <li className='text-xl hover:text-green-800 hover:underline '><Link to='/contact'>Contact</Link></li>
             <li className='text-xl hover:text-green-800 hover:underline '><Link to='/blog'>Blog</Link></li>

            </ul>
            <div>
              <button onClick={loginhandle}  className='text-white bg-green-800 rounded-md px-3 py-0.5 cursor-pointer'>Sign in</button>
            </div>
      </div>  
    </div>
    </>
  )
}

export default Header
