import React from 'react'

const Login = () => {
  return (
 <>
 <div className="flex h-[500px] items-center justify-center ">
      <div className="flex w-3/4 max-w-4xl rounded-xl bg-gradient-to-r from-green-500 to-white bg-opacity-10 p-10 shadow-lg backdrop-blur-md">
        {/* Left Section */}
        <div className="w-1/2 text-white p-8">
          <h1 className="text-3xl font-bold">Welcome to website</h1>
          <p className="mt-4 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-center text-lg font-semibold text-green-600">USER LOGIN</h2>
          <form className="mt-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
 
 </>
  )
}

export default Login
