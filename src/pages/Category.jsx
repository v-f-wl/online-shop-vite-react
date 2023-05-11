// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react'
import Container from '../components/Container'
import HeaderTop from '../components/header/HeaderTop'
import HeaderMain from '../components/header/HeaderMain'
import HeaderCatalog from '../components/header/HeaderCatalog'
import {BsGrid3X3, BsViewList, BsStarFill, BsStar} from 'react-icons/bs'
import GridCart from '../components/card/GridCart'
import ColumCard from '../components/card/ColumCard'
import { info } from '../productInfo'
import { useParams } from 'react-router-dom'


const Category = () => {
  const [isOn, setIsOn] = useState(
    localStorage.getItem("isOn") === "true" ? true : false
  );

  const { id } = useParams()
  
  const products = info[id]
  
  useEffect(() => {
    localStorage.setItem("isOn", isOn);
  }, [isOn]);

  const CategoriesComponent = (
    <div>
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="mt-4">
        <ul className="flex flex-col gap-3 w-[80%]">
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <span className="">Category name</span>
            <span className="px-3 py-1 flex bg-lime-200 font-bold text-xs text-lime-800 rounded-full">123</span>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <span className="">Category name</span>
            <span className="px-3 py-1 flex bg-lime-200 font-bold text-xs text-lime-800 rounded-full">23</span>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <span className="">Category name</span>
            <span className="px-3 py-1 flex bg-lime-200 font-bold text-xs text-lime-800 rounded-full">5</span>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <span className="">Category name</span>
            <span className="px-3 py-1 flex bg-lime-200 font-bold text-xs text-lime-800 rounded-full">76</span>
          </li>
        </ul>
      </div>  
    </div>
  )

  const Brand = (
    <div>
      <h2 className="text-xl font-semibold">Brands</h2>
      <div className="mt-4">
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span>Filtre by brand item</span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span>Filtre by brand item</span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span>Filtre by brand item</span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span>Filtre by brand item</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )

  const Ruiting = (
    <div className="">
      <h2 className="text-xl font-semibold">Brands</h2>
      <div className="mt-4">
      <ul className="flex flex-col gap-3">
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-3 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span className='flex gap-1 items-center'> 
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
              </span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-3 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span className='flex gap-1 items-center'> 
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStar size={22} className='text-neutral-500'/>
              </span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-3 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span className='flex gap-1 items-center'> 
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStar size={22} className='text-neutral-500'/>
                <BsStar size={22} className='text-neutral-500'/>
              </span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-3 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span className='flex gap-1 items-center'> 
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStar size={22} className='text-neutral-500'/>
                <BsStar size={22} className='text-neutral-500'/>
                <BsStar size={22} className='text-neutral-500'/>
              </span>
            </label>
          </li>
          <li className="flex justify-between items-center py-1 cursor-pointer">
            <label className='flex items-center gap-3 cursor-pointer'>
              <input 
                type="checkbox"
                className='
                  appearance-none
                  rounded-md
                  w-[24px]
                  h-[24px]
                  border-2
                  checked:bg-lime-500
                  checked:border-lime-900
                '
              />
              <span className='flex gap-1 items-center'> 
                <BsStarFill size={22} className='text-yellow-400'/>
                <BsStar size={22} className='text-neutral-500'/>
                <BsStar size={22} className='text-neutral-500'/>
                <BsStar size={22} className='text-neutral-500'/>
                <BsStar size={22} className='text-neutral-500'/>
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )

  const Price = (
    <div>
      <h2 className="text-xl font-semibold">Price</h2>
      <div className="mt-4">
        <div className="flex gap-4 items-center">
          <label className='flex flex-col gap-1'>
            <span>Min</span>
            <input type='number' className='px-[10px] h-[42px] w-[100px] border rounded-lg' placeholder='0 $'/>
          </label>

          <span className='mt-6 block w-3 h-0 border'></span>

          <label className='flex flex-col gap-1'>
            <span>Max</span>
            <input type='number' className='px-[10px] h-[42px] w-[100px] border rounded-lg' placeholder='100 $'/>
          </label>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="py-2 px-4 border-[3px] border-lime-800 bg-lime-600 text-white rounded-lg font-semibold hover:opacity-80 transition">Apply</button>
          <button className="py-2 px-4 text-neutral-400 font-semibold">Reset</button>
        </div>
      </div>
    </div>
  )

  const renderInfo = (products) => {
    if(!products){
      return (
        <div className="flex w-full h-[500px] items-center justify-center font-bold text-2xl">
          Not Found
        </div>
      )
    }
    if(isOn){
      return(
        products.map((item) => (
          <GridCart
            key={item.idProduct}
            id={item.idProduct}
            catalog={id}
            title={item.title}
            subtitle={item.subtitle}
            ruiting={item.ruiting}
            price={item.price}
          />
        ))
      )
    }else{
      return(
        products.map((item) => (
            <ColumCard
              key={item.idProduct}
              id={item.idProduct}
              catalog={id}
              title={item.title}
              subtitle={item.subtitle}
              ruiting={item.ruiting}
              price={item.price}
              delivery='1'
              properties={item.properties}
            />
        ))
      )
    }
  }
  return (
    <div>
      <Container>
          <HeaderTop/>
          <hr />
          <HeaderMain/>
        </Container>
      <HeaderCatalog/>

      <Container>
        <div className="py-8 flex justify-between items-center">
          <h2 className="font-bold text-3xl">
            {id[0].toUpperCase() + id.substring(1)}
          </h2>
          <div className="flex gap-5 items-center">
            <div 
              className={`
                flex 
                gap-2 
                items-center 
                cursor-pointer
                ${isOn ? 'text-black' : 'text-neutral-400'}
              `}
              onClick={() => setIsOn(true)}
            >
              <BsGrid3X3/>
              <span className="">
                Grid view
              </span>
            </div>
            <div 
              className={`
                flex 
                gap-2 
                items-center 
                cursor-pointer
                ${isOn ? 'text-neutral-400' : 'text-black'}
              `}
              onClick={() => setIsOn(false)}
            >
              <BsViewList/>
              <span className="">
                List view
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-catalog
            justify-between
          "
        >
          <div className='flex flex-col gap-[48px]'>
            {CategoriesComponent}
            {Brand}
            {Ruiting}
            {Price}
          </div>
          <div 
            className={`
              ${isOn && products ? 'grid' : 'flex'}
              ${isOn && products ? 'grid-cols-3' : 'flex-col'}
              ${isOn && products ? 'items-baseline' : ''}
              ${isOn && products ? 'h-0' : ''}
              ${isOn && products ? 'gap-x-5' : 'gap-5'}
              ${isOn && products ? 'gap-y-7' : ''}
              ${products ? '' : 'block'}
            `}
          >
            {renderInfo(products)}
          </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Category