import React from 'react'

const MainSection = ({title}) => {
  const ListItem = (
    <a href='#' className="p-4 w-full flex flex-col gap-4 border rounded-xl">
      <div className="aspect-square bg-neutral-100 rounded-xl"></div>
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
    </a>
  )
  return (
    <div className='py-[64px]'>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>
        <a href="#" className="font-bold text-xl">More</a>
      </div>

      <div 
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          lg:mt-[32px] 
          lg:gap-8
          lg:flex 
          lg:justify-between 
        "
        >
        {ListItem}
        {ListItem}
        {ListItem}
        {ListItem}
      </div>
    </div>
  )
}

export default MainSection