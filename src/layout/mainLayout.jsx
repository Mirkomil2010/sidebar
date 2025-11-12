import Sidebar from '@/components/shared/sidebar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <main className='flex items-start gap-6'>
      <Sidebar />
      <Outlet />
    </main>
  )
}
