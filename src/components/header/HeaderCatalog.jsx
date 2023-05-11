// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'

const HeaderCatalog = () => {
  return (
    <div className='hidden md:block bg-neutral-100'>
      <Container>
        <div className="h-16 flex items-center">
          <ul className="flex gap-10 text-sm font-linght xl:text-lg">
            <li>
              <Link 
                to='/category/bakery' 
              >
                <a className=""k>Bakery</a>
              </Link>
            </li>
            <li>
              <Link to='/category/fruit'>
                <a href="#" className="">Fruit and vegetables</a>
              </Link>
            </li>
            <li>
              <Link to='/category/meat'>
                <a href="#" className="">Meat and fish</a>
              </Link>
            </li>
            <li>
              <Link to='/category/drinks'>
                <a href="#" className="">Drinks</a>
              </Link>
            </li>
            <li>
              <Link to='/category/kitchen'>
                <a href="#" className="">Kitchen</a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default HeaderCatalog