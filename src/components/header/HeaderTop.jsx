

const HeaderTop = () => {
  return ( 
    <div className="hidden md:flex justify-between text-xs py-4">
      <ul className="flex gap-5">
        <li><a href="#" className="hover:text-lime-500 transition">Chat with us</a></li>
        <li><a href="#" className="hover:text-lime-500 transition">+420 336 775 664</a></li>
        <li><a href="#" className="hover:text-lime-500 transition">info@freshnesecom.com</a></li>
      </ul>


      <ul className="flex gap-5">
        <li><a href="#" className="hover:text-lime-500 transition">Blog</a></li>
        <li><a href="#" className="hover:text-lime-500 transition">About Us</a></li>
        <li><a href="#" className="hover:text-lime-500 transition">Careers</a></li>
      </ul>
    </div>
  );
}
 
export default HeaderTop;