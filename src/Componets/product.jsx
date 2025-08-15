import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './nav';
import Header from './Others/Footer';
import Cart from './Others/carts';
import axios from 'axios';
import load from '/load.gif';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { category } = useParams();
  const [finalpro, setFinalpro] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = category
        ? await axios.get(`https://dummyjson.com/products/category/${category}`)
        : await axios.get(`https://dummyjson.com/products`);

      setFinalpro(res.data?.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div>
      <Nav />
      <div className='relative top-[125px] px-3 py-3'>
        {loading ? (
          <div className='w-full flex justify-center items-center h-[100vh]'>
            <img src={load} alt="Loading..." className='w-[200px] h-[200px] object-contain' />
          </div>
        ) : (
          <div className='flex flex-wrap gap-4 justify-center'>
            {finalpro.map((val, i) => (
              <Cart key={i} url={val.thumbnail} title={val.title} price={val.price} />
            ))}
          </div>
        )}
      </div>

      <div className='pt-16'>
        <hr />
        <Header />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Product;
