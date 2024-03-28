import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-16 h-9 flex justify-center items-center' : 'font-bold w-16 h-9 flex justify-center items-center'}>Home</NavLink>
                        <NavLink to='/listbooks' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-24 h-9 flex justify-center items-center ' : 'font-bold w-24 h-9 flex justify-center items-center'}>Listed Books</NavLink>
                        <NavLink to='/pagescharts' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-32 h-9 flex justify-center items-center ' : 'font-bold w-24 h-9 flex justify-center items-center'}>Pages To Read</NavLink> 
                        <NavLink to='/publicreaction' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-28 h-9 flex justify-center items-center ' : 'font-bold w-24 h-9 flex justify-center items-center'}>Public Review</NavLink>
                        <NavLink to='/quaris' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-16 h-9 flex justify-center items-center ' : 'font-bold w-16 h-9 flex justify-center items-center'}>Quaris</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl  ">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        <NavLink to='/' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-16 h-9 flex justify-center items-center' : 'font-bold w-16 h-9 flex justify-center items-center'}>Home</NavLink>
                        <NavLink to='/listbooks' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-24 h-9 flex justify-center items-center ' : 'font-bold w-24 h-9 flex justify-center items-center'}>Listed Books</NavLink> 
                        <NavLink to='/pagescharts' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-32 h-9 flex justify-center items-center ' : 'font-bold w-24 h-9 flex justify-center items-center'}>Pages To Read</NavLink> 
                        <NavLink to='/publicreaction' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-28 h-9 flex justify-center items-center ' : 'font-bold w-24 h-9 flex justify-center items-center'}>Public Review</NavLink>
                        <NavLink to='/quaris' className={({isActive})=>isActive ? 'text-accent font-bold bg-white border-2 border-green-300 rounded-md w-16 h-9 flex justify-center items-center ' : 'font-bold w-16 h-9 flex justify-center items-center'}>Quaris</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-1 flex-col lg:flex-row">
                    <a className="btn btn-sm  bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn btn-sm  bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;