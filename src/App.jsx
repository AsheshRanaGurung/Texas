import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CardDetail from './components/CardDetail'
import CardList from './components/CardList'
import Login from './components/Login'

export const BaseURL = "https://jsonplaceholder.typicode.com"
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <CardList />,
        },
        {
            path: "/post/:id",
            element: <CardDetail />,
        },
        {
            path: "/login",
            element: <Login />,
        }
    ])
    return <RouterProvider router={router} />

}
export default App



