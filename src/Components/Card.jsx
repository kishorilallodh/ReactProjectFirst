import React from 'react'
import image from '../img/tech_img.jpg'
import image2 from '../img/tech_img2.jpg'
import image3 from '../img/tech_img3.jpg'

const Card = () => {
  return (
    <div className='flex w-full py-[50px]'>
       <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <img className="w-full h-48 object-cover" src={image} alt="Card Image"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
              <p className="text-gray-600 mt-2">
                This is a simple card component using Tailwind CSS in React. It has a title, description, and an image.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <img className="w-full h-48 object-cover" src={image2} alt="Card Image"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
              <p className="text-gray-600 mt-2">
                This is a simple card component using Tailwind CSS in React. It has a title, description, and an image.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <img className="w-full h-48 object-cover" src={image3} alt="Card Image"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
              <p className="text-gray-600 mt-2">
                This is a simple card component using Tailwind CSS in React. It has a title, description, and an image.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
    </div>
  )
}

export default Card
