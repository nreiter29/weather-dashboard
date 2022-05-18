import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './index'
import { QueryClientProvider, QueryClient } from 'react-query'
import '../weatherdisplay-icons/MarkPro/MarkPro.otf'
import './style.css'

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
