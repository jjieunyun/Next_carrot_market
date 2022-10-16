import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-slate-300 py-20 px-14 grid gap-10' >
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500'>Tooly Table</span>
          <span className='font-semibold'>$80</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$98</span>
        </div>
        <div className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto'>
          Checkout
        </div>
      </div>
      <div className='bg-white overflow-hidden rounded-3xl shadow-xl'>
        <div className='bg-blue-500 p-6 pb-14'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 relative bg-white -top-5'>
          <div className='flex relative -top-16 items-end justify-between '>
            <div className='flex flex-col item-center'>
              <span className='text-small text-gray-500'>Orders</span>
              <span className='font-medium'>340</span>
            </div>
            <div className='h-24 w-24 bg-red-400 rounded-full'/>
            <div className='flex flex-col item-center'>
              <span className='text-small text-gray-500'>Spent</span>
              <span className='font-medium'>$2,310</span>
            </div>
          </div>
          <div className='relative flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Tony Molly</span>
            <span className='text-sm text-gray-500'>미국</span>
          </div>
        </div>
      </div>
      <div className='bg-white p-10 rounded-3xl shadow-xl'>
        <span>⬅</span>
        <div>
          <span>⭐️ 4.9</span>
          <span>💜</span>
        </div>
        <div>
          <div/>
        </div>
        <div>
          <span>Swoon Lounge</span>
          <span>Chair</span>
          <div>
            <div>
              <input type="radio"/>
              <input type="radio"/>
              <input type="radio"/>
            </div>
            <div>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}