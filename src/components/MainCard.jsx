// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
const MainCard = ({
  // eslint-disable-next-line react/prop-types
  baner,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  button,
  // eslint-disable-next-line react/prop-types
  list
}) => {

  const Banner = (
    <div className="w-full bg-emerald-50 p-11 rounded-xl flex flex-col justify-between gap-10">
      <div>
        <h3 className="text-xs text-lime-600">Banner subfocus</h3>
        <h2 className="text-2xl font-semibold">Space for heading</h2>
      </div>
      <a href="#" 
        className="
          w-[150px]
          h-[50px]
          border-2
          border-solid
          border-lime-600
          rounded-xl
          flex 
          justify-center
          items-center
        "
      >
        Read recepies
      </a>
    </div>
  )

  const ListItem = (
    <Link to='/info' className='w-full'>
      <div className="p-4 w-full flex flex-col gap-4 border rounded-xl">
        <div className="w-full aspect-square bg-neutral-100 rounded-xl"></div>
        <div className="">
          <h3 className="font-semibold">
            Product Title
          </h3>
          <span className="font-light text-xs text-neutral-500">
            Space for a small product description 
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">
            1.48 USD
          </span>
          <button 
            className='
              px-3 
              py-2 
              font-xs 
              relative 
              z-10 
              bg-lime-500 
              rounded-xl
              font-bold
              text-white
            '
            >
            Buy now
          </button>
        </div>
      </div>
    </Link>
  )

  return (
    <div className='py-[20px] flex flex-col lg:py-[64px]  lg:flex-row justify-between items-stretch'>
      <div className="flex items-center justify-between lg:w-[420px] lg:block">
        <h2 className="text-md lg:text-xl font-bold text-neutral-700">
          {title}
        </h2>
        <ul  
          className='
            mt-3 
            hidden
            lg:flex-col 
            lg:flex
            lg:gap-4
            lg:text-lg
          '
          >
          <li><a href="#" className='text-lime-600 hover:text-lime-900 transition underline underline-offset-4'>Bakery</a></li>
          <li><a href="#" className='text-lime-600 hover:text-lime-900 transition underline underline-offset-4ß'>Fruit and vegetables</a></li>
          <li><a href="#" className='text-lime-600 hover:text-lime-900 transition underline underline-offset-4ß'>Meat and fish</a></li>
          <li><a href="#" className='text-lime-600 hover:text-lime-900 transition underline underline-offset-4ß'>Drinks</a></li>
          <li><a href="#" className='text-lime-600 hover:text-lime-900 transition underline underline-offset-4ß'>Kitchen</a></li>
        </ul>
        <a href="#" 
          className="
            flex 
            items-center 
            justify-center
            w-[180px] 
            h-[40px] 
            lg:w-[220px] 
            lg:h-[50px]
            lg:text-xl
            lg:mt-10 
            rounded-xl
            bg-neutral-100
            font-bold
          "
          >
            More {button}
          </a>
      </div>
      {baner && (
        <div 
          className="
            mt-4 
            w-full
            flex
            flex-col 
            justify-between 
            gap-4 
            md:flex-row 
            lg:gap-8 
            lg:mt-0 
            "
          >
          {Banner}
          {Banner}
        </div>
      )}
      {list && (
        <div 
          className="
            mt-4 
            w-full
            grid
            gap-4
            grid-cols-1
            md:grid-cols-2
            lg:gap-8 
            lg:justify-between
            lg:mt-0 
            lg:flex
            "
          >
          {ListItem}
          {ListItem}
          {ListItem}
        </div>
      )}
    </div>
  )
}

export default MainCard