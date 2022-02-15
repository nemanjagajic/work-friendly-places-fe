import React from 'react'
import { useLocale } from '../../hooks/i18n'
import { useRouter } from 'next/router'
import { useIsLoggedIn } from '../../hooks/auth'

const IS_SERVER = typeof window === 'undefined'

interface NavBarItem {
  title: string,
  onClick: () => void
}

type NavBarProps = {
  activeTab: string
}

const NavBar: React.FC<NavBarProps> = ({ activeTab }) => {
  const { t } = useLocale()
  const router = useRouter()
  const isLoggedIn = useIsLoggedIn()

  const logOut = () => {
    !IS_SERVER && localStorage.removeItem('token')
    router.reload()
  }

  const items = [
    {
      title: t.navbar.home, onClick: () => {
      }
    },
    {
      title: t.navbar.addPlace, onClick: () => {
      }
    },
    {
      title: t.navbar.aboutUs, onClick: () => {
      }
    }
  ]

  const renderNavBarItem = (item: NavBarItem) => (
    <li
      className={
        `p-2 mx-4 cursor-pointer text-base font-medium 
      ${item.title === activeTab ? 'text-neutral-50' : 'text-gray-400'} 
      hover:text-neutral-50
      ease-in-out duration-200`
      }
      key={item.title}
      onClick={item.onClick}
    >
      {item.title}
    </li>
  )

  return (
    <nav className='flex flex-row place-content-between absolute p-4 w-full h-30 bg-indigo-700'>
      <ul className='flex flex-row'>
        {items?.map((item) => renderNavBarItem(item))}
      </ul>
      <div
        className={
          `p-2 mx-4 cursor-pointer text-base font-medium 
          ${t.auth.buttons.logIn === activeTab ? 'text-neutral-50' : 'text-gray-400'} 
          hover:text-neutral-50
          ease-in-out duration-200`
        }
        onClick={() => isLoggedIn ? logOut() : router.push('auth')}
      >
        {isLoggedIn ? t.auth.buttons.logOut : t.auth.buttons.logIn}
      </div>
    </nav>
  )
}

export default NavBar