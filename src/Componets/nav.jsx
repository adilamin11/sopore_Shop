import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import lencheck from './lencheck';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [totalp, settotalp] = useState(0);
  const [login, setlogin] = useState(false);
  const [name, setname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setname(storedUser.name);
      setlogin(true);
    }
  }, []);

  useEffect(() => {
    settotalp(lencheck());
  }, []);

  const logout = () => {
    sessionStorage.removeItem('login');
    setlogin(false);
    navigate('/login');
  };

  const userLogo = () => {
    if (!user) return '';
    const nameParts = name.trim().split(' ');
    return (nameParts[0]?.charAt(0) + nameParts[1]?.charAt(0)).toUpperCase();
  };

  // Variants
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const badgeVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.3 } },
    pulse: { scale: [1, 1.2, 1], transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' } },
  };

  return (
    <motion.nav
      className="w-full h-[70px] px-4 sm:px-6 fixed bg-white shadow-lg z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="flex items-center justify-between py-3">
        {/* Left Section */}
        <div className="flex gap-3 items-center">
          {!login ? (
            <>
              <Link
                to="/signUp"
                className="border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white text-sm transition-colors"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white text-sm transition-colors"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                {userLogo()}
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800 truncate max-w-[90px]">
                {name}
              </span>
            </div>
          )}
        </div>

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-700">
          SoporeShop
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {login && (
            <button
              onClick={logout}
              className="hidden sm:inline border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white text-sm transition-colors"
            >
              Logout
            </button>
          )}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate('/addToCart')}
          >
            <i className="ri-shopping-cart-2-line text-2xl text-green-700"></i>
            <motion.div
              className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shadow-md"
              variants={badgeVariants}
              initial="hidden"
              animate={totalp > 0 ? 'pulse' : 'visible'}
            >
              {totalp}
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="sm:hidden"
          >
            <i className="ri-menu-line text-2xl text-green-700"></i>
          </button>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex justify-center gap-6 border-t pt-2">
        <Link to="/" className="text-base hover:underline">Home</Link>
        <Link to="/products" className="text-base hover:underline">Product</Link>
        <Link to="/Contact" className="text-base hover:underline">Help & Support</Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.ul
            className="sm:hidden fixed top-[70px] left-0 w-full bg-gradient-to-b from-green-500 to-green-700 text-white flex flex-col items-center py-5 gap-4 shadow-xl backdrop-blur-md"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <li><Link to="/" onClick={() => setMenu(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenu(false)}>Product</Link></li>
            <li><Link to="/Contact" onClick={() => setMenu(false)}>Help & Support</Link></li>
            {login && (
              <li>
                <button
                  onClick={() => { logout(); setMenu(false); }}
                  className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-green-700 text-sm"
                >
                  Logout
                </button>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
