import React from 'react'
import { useLocale } from '../../hooks/i18n'
import { useRouter } from 'next/router'
import { useIsLoggedIn } from '../../hooks/auth'

const IS_SERVER = typeof window === 'undefined'

interface NavBarItem {
  title: string,
  onClick: () => void
}

const NavBar: React.FC = () => {
  const { t } = useLocale()
  const router = useRouter()
  const isLoggedIn = useIsLoggedIn()

  const logOut = () => {
    !IS_SERVER && localStorage.removeItem('token')
    router.reload()
  }

  const items = [
    { title: t.navbar.home, onClick: () => {} },
    { title: t.navbar.addPlace, onClick: () => {} },
    { title: t.navbar.aboutUs, onClick: () => {} },
    {
      title: isLoggedIn ? t.auth.buttons.logOut : t.auth.buttons.logIn,
      onClick: () => {
        isLoggedIn ? logOut() : router.push('auth')
      }
    }
  ]

  const renderNavBarItem = (item: NavBarItem) => (
    <li
      className='p-2 m-2 border cursor-pointer'
      key={item.title}
      onClick={item.onClick}
    >
      {item.title}
    </li>
  )

  return (
    <ul className='flex flex-row p-4 border'>
      {items?.map((item) => renderNavBarItem(item))}
    </ul>
  )
}

export default NavBar