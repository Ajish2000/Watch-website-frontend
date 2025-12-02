import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
 const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <header className="flex justify-between items-center p-7 bg-gray-800 text-white sticky top-0">
      <h1 className="text-xl font-bold">Watch & Services</h1>
      <nav className="hidden md:block">
        <ul className='flex text-white gap-6'>
       <li><Link to="/" className="hover:text-yellow-400">Home</Link></li> 
       <li><Link to="/Service" className="hover:text-yellow-400">Services</Link></li> 
       <li> <Link to="/About" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/Contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </nav>
     {toggleMenu && <nav className="block md:hidden mobile-nav">
        <ul className='flex flex-col gap-6'>
       <li><Link to="/" className="hover:text-yellow-400">Home</Link></li> 
       <li><Link to="/Service" className="hover:text-yellow-400">Services</Link></li> 
       <li> <Link to="/About" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/Contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </nav>}
      <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  );
}
