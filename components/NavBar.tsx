import React from 'react'
import { useLocale } from '../hooks/i18n'

interface NavBarItem {
  title: string,
  onClick: () => void
}

const NavBar: React.FC = () => {
  const { t } = useLocale()

  const items = [
    { title: t.navbar.home, onClick: () => {} },
    { title: t.navbar.addPlace, onClick: () => {} },
    { title: t.navbar.aboutUs, onClick: () => {} }
  ]

  const renderNavBarItem = (item: NavBarItem) => (
    <li
      className='p-2 m-2 border'
      key={item.title}
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