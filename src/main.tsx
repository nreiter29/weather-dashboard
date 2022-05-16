import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './index'
import { useQuery, QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <App/>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
