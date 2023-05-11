// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsStarFill, BsStar} from 'react-icons/bs'

export const starCount = {
  5: (<>
    <span className='flex gap-1 items-center'> 
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
    </span></>),
  4: (<>
    <span className='flex gap-1 items-center'> 
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStar size={16} className='text-neutral-500'/>
    </span></>),
  3: (<>
    <span className='flex gap-1 items-center'> 
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStar size={16} className='text-neutral-500'/>
      <BsStar size={16} className='text-neutral-500'/>
    </span></>),
  2: (<>
    <span className='flex gap-1 items-center'> 
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStar size={16} className='text-neutral-500'/>
      <BsStar size={16} className='text-neutral-500'/>
      <BsStar size={16} className='text-neutral-500'/>
    </span></>),
  1: (<>
    <span className='flex gap-1 items-center'> 
      <BsStarFill size={16} className='text-neutral-800'/>
      <BsStar size={16} className='text-neutral-500'/>
      <BsStar size={16} className='text-neutral-500'/>
      <BsStar size={16} className='text-neutral-500'/>
      <BsStar size={16} className='text-neutral-500'/>
    </span></>),
}
