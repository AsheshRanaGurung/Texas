import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CardDetail from './components/CardDetail'
import CardList from './components/CardList'

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
        }
    ])
    return <RouterProvider router={router} />

}
export default App



