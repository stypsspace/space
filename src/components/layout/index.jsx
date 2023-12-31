import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <header className='site-header'>
        <nav className='container'>
          <ul className='site-header-menu'>
            <li>
              <Link
                href='/'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/shop'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Shop
              </Link>
            </li>

            <li>
            <Link
                href='/personal'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Personal
              </Link>
            </li>

            <li>
            <Link
                href='/portfolio'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='container p-8'>{children}</main>

      <footer className='bg-stone-100 text-sm font-medium uppercase text-stone-400 px-8 py-4'>
        <div className='container'>
          <p>Footer</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
