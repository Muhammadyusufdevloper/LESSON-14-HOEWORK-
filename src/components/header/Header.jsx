import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  let location = useLocation();


  if (location.pathname.includes('/admin')) {
    return null;
  }
  let isLogin = localStorage.getItem("x-auth-token")
  return (
    <>
      <header className='py-5 bg-slate-700 sticky top-0 left-0'>
        <nav className='container mx-auto flex items-center justify-between'>
          <Link to={"/"} className='text-2xl font-bold text-white'>Logo</Link>
          <ul className='flex items-center gap-4 text-white'>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ isLogin ? "/admin" : "/login" }> {isLogin ? "Admin" : "Login"} </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
