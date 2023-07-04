import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/dalirr.jpg';
import style from '../style/Username.module.css';

export default function Username() {
  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
      <div className={style.glass}>
        <h4 className='text-4xl font-bold text-center'>Hello Again</h4>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Explore more by connecting with us
        </span>

        <form className='mt-8'>
          <div className='profile flex items-center justify-center'>
            <img src={avatar} className={style.profile_img} alt='avatar' />
          </div>

          <div className='textbox flex flex-col items-center mt-6'>
            <input className={style.textbox} type='text' placeholder='Username' />
          </div>

          <div className='textbox flex items-center justify-center mt-4'>
            <button className={style.btn} type='submit'>
              Continue
            </button>
          </div>

          <div className='text-center mt-4'>
            <span className='text-gray-500'>
              Not a Member{' '}
              <Link className='text-red-500' to='/register'>
                Register Now!
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
