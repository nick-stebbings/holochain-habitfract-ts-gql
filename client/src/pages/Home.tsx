import React from 'react'
import { LoginForm } from '../components/LoginForm'

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
