// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../images/logo.svg'
import { IoPersonOutline, IoBagOutline , IoSearchOutline} from 'react-icons/io5'
const HeaderMain = () => {
  const sI = 28
  return ( 
    <div className="py-5 flex justify-between items-center lg:py-7">
      <a href="/">
        <img src={logo} alt='dfvdf'/>
      </a>
      <div 
        className="
          px-4
          py-2
          w-2/4
          xl:w-1/4
          h-12 
          flex
          justify-between
          items-center
          border-solid 
          border-2 
          border-neutral-300 
          rounded-full
        "
      >
        <input type="text" className='block w-full outline-none' placeholder='Search Products, categories ...'/>
        <button>
          <IoSearchOutline size={24}/>
        </button>

      </div>

      <div className="flex gap-6">
        <a href="#" className="">
          <IoPersonOutline size={sI}/>
        </a>
        <a href="#" className="">
          <IoBagOutline size={sI}/>
        </a>
      </div>
    </div>
  );
}
 
export default HeaderMain;