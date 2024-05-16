import { lazy, ComponentType } from 'react'
import { useRoutes } from 'react-router-dom'
import withSuspense from './withSuspense';

const Home = lazy(() => import('../views/userInfo'));

interface Router {
    name: string,
    path: string,
    children?: Array<Router>,
    Component?: ComponentType
}

const router: Array<Router> = [
    {
        name: "home",
        path: '/',
        Component: withSuspense(Home),
    },
]

const Routelist = () => {
    return useRoutes(router)
}

export default Routelist
