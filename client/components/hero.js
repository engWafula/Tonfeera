import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Web3 from 'web3';
import { shortenAddress } from '../utils/shortenAddress';

const Hero = () => {
  const [account, setAccount] = useState('0x000');

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
    }
  }

  async function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    setAccount(account);
  }

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <>
      <div className='relative bg-white overflow-hidden bg-transparent'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <main className='my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Ensuring Quality </span>{' '}
                  <span className='block text-indigo-600 xl:inline'>
                    Using Blockchain
                  </span>
                </h1>
                <p className='text-base mt-3  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  We verify the authenticity of products and manufacturers,
                  track their ownership, prevent counterfeiting in a completely
                  decentralized and user-friendly manner. So that you can buy
                  them knowing that they are safe.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <Link href='/brand'>
                      <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                        Explore All Products
                      </a>
                    </Link>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <Link href='/brand/new'>
                      <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'>
                        Add your Product
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-4 lg:mt-32'>
        <div className='h-56 w-full sm:h-72 lg:h-3/5 bg-white relative'>
          <Image src='/hero.gif' layout='fill' alt='' objectFit='contain' />
        </div>
        <div className='mt-5  md:ml-60 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='mt-3 sm:mt-0 sm:ml-3'>
            <div>
              <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'>
                Your Address:{' '}
                {account
                  ? shortenAddress(account)
                  : 'You No Metamask address connected'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
