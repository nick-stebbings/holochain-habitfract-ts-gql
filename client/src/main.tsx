import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { theme } from './definitions/styled/theme'
import { Home } from './pages/Home'
import client from './services/holochainClient'
import './index.css'

const root = document.getElementById('root')

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Home />}></Route>
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
