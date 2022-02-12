import { useEffect, useState } from 'react'

const IS_SERVER = typeof window === 'undefined'

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!IS_SERVER && !!localStorage.token)
  }, [])

  return isLoggedIn
}