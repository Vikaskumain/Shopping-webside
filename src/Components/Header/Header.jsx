import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

function Header() {
  return (
    <div className="main-div">
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-700 text-white p-4 shadow-2xl ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">TANN TRIM</h1>
        <div className="space-x-6 flex items-center">
         
          <div className="space-x-4 flex items-center gap-5">
            <span className="material-icons h-8 w-8 cursor-pointer"><CiSearch className="h-8 w-8 cursor-pointer"/></span>
            <span className="material-icons h-8 w-8 cursor-pointer"><IoPersonOutline className="h-8 w-8 cursor-pointer"  /></span>
            <span className="material-icons h-8 w-8 cursor-pointer"><CiBookmark className="h-8 w-8 cursor-pointer" /></span>
            <span className="material-icons h-8 w-8 cursor-pointer"><FaShoppingBag className="h-8 w-8 cursor-pointer" /></span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-6 text-gray-400">
      <div className="space-x-4 hidden sm:flex">
            <a href="#" className="hover:text-gray-200 text-lg text-white">Bags</a>
            <a href="#" className="hover:text-gray-200 text-lg text-white">Travel</a>
            <a href="#" className="hover:text-gray-200 text-lg text-white">Accessories</a>
            <a href="#" className="hover:text-gray-200 text-lg text-white">Gifting</a>
            <a href="#" className="hover:text-gray-200 text-lg text-white">Jewelry</a>
          </div>
      </div>
    </nav>
    </div>
  )
}

export default Header
