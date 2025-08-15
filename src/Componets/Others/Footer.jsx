import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/xaid.adil.714/", icon: "ri-facebook-box-fill" },
    { href: "https://www.instagram.com/11adilamin/", icon: "ri-instagram-fill" },
    { href: "https://x.com/Adil11Rather?s=08", icon: "ri-twitter-fill" },
    { href: "https://www.youtube.com/@12programming", icon: "ri-youtube-fill" }
  ];

  return (
    <footer className="bg-white w-full relative">
      {/* Main Footer Section */}
      <motion.div
        className="flex flex-wrap justify-between items-center px-5 py-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.h1
          className="text-4xl text-pink-500 hover:text-yellow-600 font-extrabold max-[425px]:text-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          SoporeShop
        </motion.h1>

        {/* Navigation Links */}
        <motion.ul
          className="flex items-center gap-5 max-[425px]:hidden text-pink-500 hover:text-yellow-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { name: "Home", to: "/" },
            { name: "Product", to: "/products" },
            { name: "Help & Support", to: "/Contact" }
          ].map((link, i) => (
            <motion.li
              key={i}
              className="font-medium text-lg border-b-2 border-transparent hover:border-yellow-500 cursor-pointer"
              whileHover={{ scale: 1.1, color: "#e53e3e" }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Link to={link.to}>{link.name}</Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className=" text-pink-500 font-extrabold hover:text-yellow-600">Follow On</h2>
          <div className="flex gap-2 mt-1 text-pink-500 hover:text-blue-700">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={`${social.icon} text-3xl  transition-colors duration-300 hover:text-red-500`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-gray-300  w-full flex justify-center items-center text-black h-[50px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h1 className="text-sm text-center text-black font-sans font-semibold">
          © {new Date().getFullYear()} @SoporeShop. All rights reserved.
        </h1>
      </motion.div>
    </footer>
  );
};

export default Footer;
