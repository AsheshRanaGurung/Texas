import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <ChakraProvider>
        <Toaster
            position="top-right" />
        <App />
    </ChakraProvider>
    </React.StrictMode>,
)
