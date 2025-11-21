import { createBrowserRouter } from "react-router-dom"
import Dashboard from "@/pages/dashboard"
import MainLayout from "@/layout/mainLayout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
])

export default router
