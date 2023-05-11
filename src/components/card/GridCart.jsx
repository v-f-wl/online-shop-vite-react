// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { starCount } from '../../ruiting'

// eslint-disable-next-line react/prop-types
const GridCart = ({id, catalog, title, subtitle,ruiting, price}) => {
  return (
    <div className="p-5 border w-full rounded-lg flex flex-col gap-3">
      <div className="w-full h-[270px] bg-neutral-100 rounded-lg">
      </div>
      <h3 className="font-medium text-lg">{title}</h3>
      <div className="font-light text-sm text-neutral-600">{subtitle}</div>
      <div className="">{starCount[ruiting]}</div>
      <div className="flex justify-between items-center">
        <div className="c">{price} USD</div>
        <Link to={`/info/${catalog}/${id - 1}`}>
          <div className="py-2 px-4 border-[3px] border-lime-800 bg-lime-600 text-white rounded-lg font-semibold hover:opacity-80 transition">Buy now</div>
        </Link>
      </div>
    </div>
  )
}

export default GridCart