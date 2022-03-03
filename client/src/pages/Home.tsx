import React from 'react'
import { LoginForm } from '../components/LoginForm'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
