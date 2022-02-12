import React, { useState } from 'react'
import { UserAuthData } from '../ts/userTypes'
import authService from '../services/api/authService'
import { useLocale } from '../hooks/i18n'
import { useRouter } from 'next/router'

const Auth = () => {
  const [userData, setUserData] = useState<UserAuthData>({ email: '', password: '' })
  const { t } = useLocale()
  const router = useRouter()

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setUserData({ ...userData, [name]: value })
  }

  const handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    try {
      const response = await authService.logIn(userData)
      localStorage.setItem('token', response.data.jwt)
      await router.replace('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form>
        <input
          type={'email'}
          onChange={onChange}
          name={'email'}
          placeholder={t.auth.placeholders.email}
          value={userData.email}
        />
        <input
          onChange={onChange}
          name={'password'}
          placeholder={t.auth.placeholders.password}
          type={'password'}
          value={userData.password}
        />
        <input
          type={'submit'}
          value={t.auth.buttons.logIn}
          onClick={handleLogin}
          onSubmit={handleLogin}
        />
      </form>
    </div>
  )
}

export default Auth