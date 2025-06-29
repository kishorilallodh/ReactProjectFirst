import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='w-full    px-5 py-10 bg-emerald-100 border-t-2'>
  <div className='w-[80%] h-[70px]  flex justify-between items-center m-auto px-10 rounded-md bg-white'>
  <h1 className='text-[30px] italic font-bold  bg-gradient-to-b from-green-800 to-green-300 bg-clip-text text-transparent'>StartUP</h1>
  <div>
      <p className='text-4xl flex gap-2  '>
         <div className='text-blue-500'><i class="ri-facebook-circle-fill" ></i></div>
         <div className='text-red-500'> <i class="ri-youtube-fill"></i></div>
         <div className='text-blue-500'><i class="ri-linkedin-box-fill"></i></div>
         <div><i class="ri-twitter-x-line"></i></div>
         
      </p>
  </div>
  </div>


    <div className='flex gap-[100px]  justify-center pt-6 '>
    <div className=' text-gray-600  '>
   
   <p className='w-[400px]'>Hello,Everyone to this is startUp service for Money help recent started startUp.</p>
   <p className='pt-3 '><span className='font-bold'>Please contact :</span> kishorilalpsc21@gmail.com</p>
   <p className='pt-3'><span className='font-bold'>Mobile no. :</span>+91 6260513326</p>
</div>
<div className=' '>
   <h2 className='font-bold text-xl text-green-800 '>Our Service</h2>
   <ul className=' '>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
       <li>Blog</li>
   </ul>
</div>
<div className=''>
   <h2 className='font-bold text-xl text-green-800'>Course</h2>
   <ul className=' '>
       <li>Java</li>
       <li>C language</li>
       <li>Python</li>
       <li>kotlin</li>
   </ul>
</div>
<div className='   pl-20 '>
   <h2 className='font-bold text-xl text-green-800'>Contact</h2>
  <input type="text" placeholder='Subscribe.............................' className='border-2 rounded outline-none pl-2 mt-4 bg-white'/>
  <div>
  <button className='bg-green-800 text-xl  rounded-md px-12 py-1 mt-3 text-white'>SUBSCRIBE</button>
  </div>
</div>
    </div>
   </div>
   
   </>
  )
}

export default Footer
