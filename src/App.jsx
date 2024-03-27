
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CardDetail from './components/CardDetail'
import CardList from './components/CardList'
import Login from './components/Login'
import TextAnimation from "./components/TextAnimation"
import InfiniteScroll from "./components/InfiniteScroll"
import { useEffect, useState } from 'react'

export const BaseURL = "https://jsonplaceholder.typicode.com"
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("TexasToken"));

    const authRouter = createBrowserRouter([
        {
            path: "/",
            element: <CardList />,
        },
        {
            path: "/nameGenerator",
            element: <TextAnimation />,
        },
        {
            path: "/infiniteScroll",
            element: <InfiniteScroll/>,
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
    useEffect(() => {
        const token = localStorage.getItem("TexasToken");
        setIsAuthenticated(!!token);
    }, [localStorage.getItem("TexasToken"), isAuthenticated])

    return <RouterProvider router={authRouter} />

}
export default App



