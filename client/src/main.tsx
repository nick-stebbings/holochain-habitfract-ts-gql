import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { theme } from './definitions/styled/theme'
import { Home } from './pages/Home'

import './index.css'

const client = new ApolloClient({
  uri: 'https://habfract.life/v1/graphql',
  cache: new InMemoryCache(),
})

const root = document.getElementById('root')

const App: FC = () => {
  return <Home></Home>
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  root,
)
