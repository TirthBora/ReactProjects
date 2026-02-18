import React from 'react'

const RightCardContent = () => {
  return (
    <div>
        <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between ">
        <h2 className="bg-white text-2xl font-semibold rounded-full h-13 w-13 flex justify-center items-center">
          1
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aspernatur soluta quibusdam, asperiores fugit voluptas!
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              Satisfied
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent