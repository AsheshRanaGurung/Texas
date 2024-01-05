import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CardDetail from './components/CardDetail'

export const BaseURL = "https://jsonplaceholder.typicode.com"
function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/post/:id",
            element: <CardDetail />,
        }
    ])


    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}

export default App



