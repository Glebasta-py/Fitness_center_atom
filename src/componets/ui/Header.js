import React from 'react';
import './../../index.css'
import { ReactComponent as Logo } from './logo.svg';



const Header = () => {
    return (
      <header aria-label="Site Header" className="border-b border-gray-100">
      <div
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4">
          <div className='logo'>
            <a href=''>
              <Logo/>
            </a>
            </div>
        </div>
    
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <a
              href="/about"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
            >
              Услуги
            </a>
    
            <a
              href="/news"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
            >
              Новости
            </a>
    
            <a
              href="/products"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
            >
              Тренера
            </a>
    
            <a
              href="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
            >
              Расписание
            </a>
          </nav>
    
          <div className="flex items-center">
            <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
    
              <span>
                <a
                  href="/account"
                  className="block border-b-4 border-transparent p-6 hover:border-purple-700"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
    
                  <span className="sr-only"> Account </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
)
}

export default Header;