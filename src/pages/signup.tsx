import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import postHandler from '@/handlers/postHandler';
import { DEV_BACKEND_URL } from '../../constants';
import { signup } from '@/controllers/authController';
import { useRouter } from 'next/router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  // const [country, setCountry] = useState('');

  const [hover, setHover] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    const formdata = {
      phoneNo,
      email,
      name,
      username,
      password,
      confirmPassword: password,
    };

    const res = await signup(formdata);
    if (res.status === 1) {
      router.push('/');
    }
  };

  return (
    <div
      className={`w-screen h-screen bg-[#1f1f1f] flex justify-center items-center`}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`w-1/3 bg-white rounded-lg flex flex-col py-12 px-20 text-black items-center transition-all duration-300 ease-in-out ${
          hover ? 'white-shadow' : ''
        }`}
      >
        <div className="uppercase font-Poppins font-semibold text-4xl">
          Sign-up
        </div>
        <div className="w-full flex flex-col gap-4 py-8 font-Poppins">
          <div className="w-full relative border-[#5f5f5f] border-[2px] flex justify-between py-4 px-2 rounded-2xl">
            <input
              type="text"
              name=""
              id=""
              className="focus:outline-none text-sm px-2 w-5/6"
              placeholder="Enter your Username"
              value={username}
              onChange={(el) => setUsername(el.target.value)}
            />
            <label className="bg-white absolute top-0 translate-y-[-50%] px-1 font-semibold text-xs text-[#5f5f5f]">
              Username
            </label>
            <Image
              className="w-6 h-6"
              width={10000}
              height={10000}
              alt="/"
              src={'/globe.png'}
            />
          </div>

          <div className="w-full relative border-[#5f5f5f] border-[2px] flex justify-between py-4 px-2 rounded-2xl">
            <input
              type="text"
              name=""
              id=""
              className="focus:outline-none text-sm px-2 w-5/6"
              placeholder="Enter your Name"
              value={name}
              onChange={(el) => setName(el.target.value)}
            />
            <label className="bg-white absolute top-0 translate-y-[-50%] px-1 font-semibold text-xs text-[#5f5f5f]">
              Name
            </label>
            <Image
              className="w-6 h-6"
              width={10000}
              height={10000}
              alt="/"
              src={'/user.png'}
            />
          </div>

          <div className="w-full relative border-[#5f5f5f] border-[2px] flex justify-between py-4 px-2 rounded-2xl">
            <input
              type="text"
              name=""
              id=""
              className="focus:outline-none text-sm px-2 w-5/6"
              placeholder="Enter your Mobile Number"
              value={phoneNo}
              onChange={(el) => setPhoneNo(el.target.value)}
            />
            <label className="bg-white absolute top-0 translate-y-[-50%] px-1 font-semibold text-xs text-[#5f5f5f]">
              Mobile Number
            </label>
            <Image
              className="w-6 h-6"
              width={10000}
              height={10000}
              alt="/"
              src={'/phone.png'}
            />
          </div>

          <div className="w-full relative border-[#5f5f5f] border-[2px] flex justify-between py-4 px-2 rounded-2xl">
            <input
              type="email"
              autoComplete="new-password"
              name=""
              id=""
              className="focus:outline-none text-sm px-2 w-5/6"
              placeholder="Enter your Email"
              value={email}
              onChange={(el) => setEmail(el.target.value)}
            />
            <label className="bg-white absolute top-0 translate-y-[-50%] px-1 font-semibold text-xs text-[#5f5f5f]">
              Email
            </label>
            <Image
              className="w-6 h-6"
              width={10000}
              height={10000}
              alt="/"
              src={'/email.png'}
            />
          </div>
          <div className="w-full relative border-[#5f5f5f] border-[2px] flex justify-between py-4 px-2 rounded-2xl">
            <input
              type="password"
              name=""
              id=""
              className="focus:outline-none text-sm px-2 w-5/6"
              placeholder="Enter your Password"
              value={password}
              onChange={(el) => setPassword(el.target.value)}
              autoComplete="new-password"
            />
            <label className="bg-white absolute top-0 translate-y-[-50%] px-1 font-semibold text-xs text-[#5f5f5f]">
              Password
            </label>
            <Image
              className="w-6 h-6"
              width={10000}
              height={10000}
              alt="/"
              src={'/lock.png'}
            />
          </div>
        </div>
        <Link
          href="#_"
          className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative" onClick={handleSubmit}>
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
