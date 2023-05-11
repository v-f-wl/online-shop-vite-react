// eslint-disable-next-line no-unused-vars
import React from 'react'


// eslint-disable-next-line react/prop-types
const BlogCention = ({title}) => {
  return (
    <div className='py-[64px]'>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>
        <a href="#" className="font-bold text-xl">More</a>
      </div>

      <div 
        className="
          mt-[32px]
          flex
          flex-col
          gap-6
          md:grid
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <div className="
          p-10
          w-full
          aspect-square
          bg-blog-pattern
          bg-cover
          rounded-xl
          flex
          flex-col
          justify-between
        ">
          <span 
            className="
              flex
              items-center
              justify-center
              w-1/4
              py-1
              px-2
              bg-white
              rounded-2xl
              font-semibold
              text-lime-600
              md:w-1/4
            "
          >
            Dinner tips
          </span>
          <div className="text-white flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-semibold">
              Our chef tips for a great and tasty dinner ready in 20 minutes
            </h2>
            <div className="flex gap-6 items-center">
              <a href="#" className="flex gap-4 items-center">
                <span 
                  className='
                    block 
                    w-[32px] 
                    h-[32px] 
                    bg-neutral-200 
                    rounded-full
                    md:w-[42px] 
                    md:h-[42px] 
                    '
                  ></span>
                <span className="md:text-xl">Author</span>
              </a>
              <div className="md:text-xl">17. 6. 2020</div>
            </div>
          </div>
        </div>
        <div 
          className="
          flex
          flex-col
          gap-4
          "
        >
          <img src='./blog-2.jpg' alt="#" 
            className='
              w-full
            '
          />
          <span 
            className="
              flex
              items-center
              justify-center
              w-1/4
              py-1
              px-2
              bg-lime-100
              rounded-2xl
              font-semibold
              text-lime-600
              md:w-1/4
            "
          >
            Vegetable
          </span>
          <h3 
            className="
              font-semibold
              text-xl
            "
          >
            Which vegetable your family will love and want’s eat each day
          </h3>
          <div className="flex gap-4k">
            <span className="">Author</span>
            <div className="">15. 6. 2020</div>
          </div>
        </div>


        <div className="
          md:col-span-full
          lg:col-span-1
        ">  
          <ul className="mt-[1rem] lg:mt-0 flex flex-col gap-10">
            <li>
              <a href="#" 
                className="
                  flex
                  justify-between
                  items-center
                  gap-6
                "
              >
                <div className='flex flex-col gap-3'>
                  <h4 
                    className="
                      font-semibold
                      text-xl
                      text-neutral-700
                    "
                  >
                    Salat is kinda good start to your morning routines
                  </h4>
                  <span className="">
                    Author   14.1.2020
                  </span>
                </div>
                <img src="./food-1.jpg" alt="" className='w-[98px] h-[98px]'/>
              </a>
            </li>
            <li>
              <a href="#" 
                className="
                  flex
                  justify-between
                  items-center
                  gap-6
                "
              >
                <div className='flex flex-col gap-3'>
                  <h4 
                    className="
                      font-semibold
                      text-xl
                      text-neutral-700
                    "
                  >
                    Our chef tips for a great and healthy breakfast
                  </h4>
                  <span className="">
                    Author   14.1.2020
                  </span>
                </div>
                <img src="./food-2.jpg" alt="" className='w-[98px] h-[98px]'/>
              </a>
            </li>
            <li>
              <a href="#" 
                className="
                  flex
                  justify-between
                  items-center
                  gap-6
                "
              >
                <div className='flex flex-col gap-3'>
                  <h4 
                    className="
                      font-semibold
                      text-xl
                      text-neutral-700
                    "
                  >
                    Prepare a simple and delicious breads
                  </h4>
                  <span className="">
                    Author   14.1.2020
                  </span>
                </div>
                <img src="./food-3.jpg" alt="" className='w-[98px] h-[98px]'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogCention