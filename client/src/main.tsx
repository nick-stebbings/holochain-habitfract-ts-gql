import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { theme } from './definitions/styled/theme'
import { Home } from './pages/Home'
import client from './graphql/holochainClient'
import './index.css'
import { Profile } from './pages/Profile'

const root = document.getElementById('root')

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/profile"
          element={
            <Profile username={localStorage.getItem('username') || ''} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  root,
)
