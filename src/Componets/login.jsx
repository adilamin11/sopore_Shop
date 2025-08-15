import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const bgRef = useRef(null);
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const titleRef = useRef(null);
  inputsRef.current = [];

  const addToRefs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Background fade-in
    gsap.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });

    // Form pop-in
    gsap.fromTo(formRef.current,
      { scale: 0.7, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }
    );

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: -30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );

    // Inputs slide-in
    gsap.fromTo(inputsRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.email !== input.email || user.password !== input.password) {
      toast.error("Invalid credentials");
      return;
    }

    const expiry = Date.now() + 30 * 60 * 1000;
    const loginSession = { isLoggedIn: true, expiry };
    sessionStorage.setItem("login", JSON.stringify(loginSession));
    toast.success("Login successful");

    setTimeout(() => navigate("/"), 1000);

    setInput({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div
      ref={bgRef}
      className='bg-[url("https://content.jdmagicbox.com/v2/comp/baramulla/m9/9999p1952.1952.241221115410.a3m9/catalogue/t-and-t-department-store-sopore-baramulla-departmental-stores-5k7vjfun13.jpg")] 
                 bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center'
    >
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className='bg-black max-[425px]:h-[400px] max-[425px]:w-[350px] bg-opacity-60 border-2 border-white px-4 py-3 w-[500px] min-h-[350px] rounded shadow-lg shadow-violet-400'
      >
        <h1 ref={titleRef} className="text-center text-3xl font-bold mb-6 text-pink-400">
          Login
        </h1>

        <div className='mb-4' ref={addToRefs}>
          <label className='text-lg text-white'>Email</label>
          <input
            name='email'
            type="email"
            required
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            className='w-full px-3 py-2 rounded outline-none focus:ring-2 focus:ring-violet-300'
            placeholder='Enter email...'
          />
        </div>

        <div className='mb-4' ref={addToRefs}>
          <label className='text-lg text-white'>Password</label>
          <input
            name='password'
            type="password"
            required
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            className='w-full px-3 py-2 rounded outline-none focus:ring-2 focus:ring-violet-300'
            placeholder='Enter password...'
          />
        </div>

        <div className='mb-4' ref={addToRefs}>
          <label className='text-lg text-white'>Confirm Password</label>
          <input
            name='confirmPassword'
            type="password"
            required
            value={input.confirmPassword}
            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
            className='w-full px-3 py-2 rounded outline-none focus:ring-2 focus:ring-violet-300'
            placeholder='Confirm password...'
          />
        </div>

        <button
          className='mb-3 w-full px-3 py-2 bg-orange-300 rounded font-semibold active:scale-105 transition-transform duration-200 hover:bg-green-400'
        >
          Login
        </button>

        <div className='flex items-center justify-center'>
          <h1 className='font-medium text-white'>
            Don't have an account?{" "}
            <Link to="/signUp" className="underline text-violet-200 hover:text-violet-400">
              Register
            </Link>
          </h1>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
