// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeaderTop from '../components/header/HeaderTop'
import HeaderMain from '../components/header/HeaderMain'
import HeaderCatalog from '../components/header/HeaderCatalog'
import Container from '../components/Container'
import { FaPlus } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import { starCount } from '../ruiting'
import { useParams } from 'react-router-dom'
import { info } from '../productInfo'


const CardInfo = () => {
  const { catalog, id} = useParams();
  const cardInfo = info[catalog][id]
  return (
    <div>
      <Container>
          <HeaderTop/>
          <hr />
          <HeaderMain/>
      </Container>
      <HeaderCatalog/>

      <Container>
        <div 
          className="
            md:mt-10 
            lg:mt-[32px] 
            lg:flex 
            lg:justify-between 
            lg:gap-8
            "
          >
            {/* блок отвечает за картинку товара  */}
            <div className="w-full h-[400px] bg-neutral-300 rounded-lg lg:flex-1">
            </div>

            {/* блок отвечает за описание товара */}
            <div className="mt-10 flex flex-col gap-[30px] lg:mt-0 lg:flex-1">
              <div className="flex flex-col gap-3">
                <h1 className='font-semibold text-3xl lg:text-4xl'>{cardInfo.title}</h1>
                {starCount[4]}
              </div>
              <div className="text-lg font-light">
                {cardInfo.description}
              </div>
              <div className="flex gap-8">
                  <ul className="flex flex-col gap-2 flex-1">
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">SKU:</span><span className="flex-1">76645</span>
                    </li>
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">Category:</span><span className="flex-1">Vegetables</span>
                    </li>
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">Stock:</span><span className="flex-1">In Stock</span>
                    </li>
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">Farm</span><span className="flex-1">Grocery Tarm Fields</span>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-2 flex-1">
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">SKU:</span><span className="flex-1">76645</span>
                    </li>
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">Buy by:</span><span className="flex-1">pcs, kgs, box, pack</span>
                    </li>
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">Delivery:</span><span className="flex-1">in 2 days</span>
                    </li>
                    <li className='flex justify-between'>
                      <span className="text-neutral-500 flex-1">Delivery area</span><span className="flex-1">Czech republic</span>
                    </li>
                  </ul>
              </div>
              <div className="p-4 border rounded-lg border-gray-500 flex justify-between items-center">
                <div className="">
                  <span className="font-bold text-xl text-lime-600">{cardInfo.price} USD</span>
                </div>
                <div className="flex gap-4">
                    <div className="px-2 border rounded-lg border-gray-500 flex justify-between items-center gap-2">
                        <input type="number" placeholder='0' className='w-[40px] text-center'/>
                        <div className="w-[1px] h-[30px] bg-slate-500"></div>
                        <select>
                          <option value="">Pcs</option>
                          <option value="">Item</option>
                        </select>
                    </div>
                    <button className='py-4 px-3 bg-lime-500 text-white font-bold rounded-lg flex gap-2 items-center'>
                      <FaPlus size={16}/>
                      Add to cart
                    </button>
                </div>
              </div>
              <button className='flex items-center gap-2 font-bold text-lg cursor-pointer'>
                <AiOutlineHeart size={22} color='#E5704B'/>
                Add to my wish list
              </button>
            </div>
        </div>

        <MainSection
          title='Related products'
        />
        <Footer/>
      </Container>
    </div>
  )
}

export default CardInfo