// eslint-disable-next-line no-unused-vars
import React from 'react'
import { starCount } from '../../ruiting'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ColumCard = ({
  // eslint-disable-next-line react/prop-types
  id,catalog, title,subtitle, ruiting, price, delivery, properties,
}) => {
  return (
    <div className='grid grid-cols-columCard border rounded-lg h-[280px] gap-8 items-center'>
      <div className="w-fill h-full bg-neutral-100"></div>
      <div>
        <div className="font-medium text-lg">{title}</div>
        <div className="mt-2 font-light text-sm text-neutral-600">{subtitle}</div>
        <div className="mt-4">{starCount[ruiting]}</div>

        <div className=" mt-3 grid grid-cols-2">
          <ul className="flex flex-col gap-1 font-light text-neutral-400">
            <li className="">Fresheness</li>
            <li className="">Farm</li>
            <li className="">Delivery</li>
            <li className="">Stock</li>
          </ul>
          <ul className="flex flex-col gap-1 font-light text-neutral-400">
            <li className="">{properties.fresheness}</li>
            <li className="">{properties.farm}</li>
            <li className="">{properties.deliv}</li>
            <li className="">{properties.stock}</li>
          </ul>
        </div>
      </div>
      <div className="justify-self-end w-full flex flex-col gap-3 ">
        <div className="font-semibold">{price} USD</div>
        <div>
          <div className="text-xs font-semibold text-neutral-400">Free Shipping</div>
          <div className="text-xs font-light text-neutral-400">Delivery in {delivery} day</div>
        </div>
        <Link to={`/info/${catalog}/${id - 1}`}>
          <div className='py-2 px-4 border-[3px] w-[150px] border-lime-800 bg-lime-600 text-white rounded-lg font-semibold hover:opacity-80 transition'>
            Product Detail
          </div>
        </Link>
        <button className='py-1 bg-neutral-100 w-[150px] font-semibold rounded-lg text-sm flex items-center justify-center gap-2'> <FaRegHeart size={14}/>Add to wish list</button>
      </div>
    </div>
  )
}

export default ColumCard