import DashboardPage from "@/pages/dashboard/page"

import { createBrowserRouter, useRoutes, type RouteObject } from "react-router-dom"
import NotFoundPage from "./pages/errors/not-found-page"
import AppLayout from "./layouts/app-layout"

const route = (path: string, { ...props }: RouteObject) => ({ path, ...props })

const routes: RouteObject[] = [
    route('/', {
        element: <AppLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <DashboardPage />,
            },
        ]
    }),
    route('*', {
        element: <NotFoundPage />
    })
]

const browserRoutes = createBrowserRouter(routes)

const AppRoutes = (): React.ReactElement | null => useRoutes(routes)

export { routes, browserRoutes }

export default AppRoutes