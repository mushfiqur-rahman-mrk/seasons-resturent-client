import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

 

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around py-2 items-center bg-gray-200">
            <div>
                <p>Seasons</p>
            </div>
            <div className="hidden lg:block">
                <div className="flex gap-3 mr-5 ">
                    {/* Navbar menu content here */}
                    <NavLink to={'/'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Home</NavLink>
                    <NavLink to={'/all-food'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>All Food</NavLink>
                    <NavLink to={'/blog'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Blog</NavLink>
                </div>  
            </div>
            <div className="flex items-center gap-2">
                <Link to={'/login'}><button className="px-4 bg-red-400 py-2 rounded-lg text-white">Login</button></Link>
                <div className="drawer drawer-end lg:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here----drawer-button */}
                        <label htmlFor="my-drawer-4" className=""><AiOutlineMenu className="text-2xl text-black"></AiOutlineMenu></label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                         <li>
                        <NavLink to={'/'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/all-food'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>All Food</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/blog'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Blog</NavLink>
                        </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Navbar;
