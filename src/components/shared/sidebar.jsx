import { LayoutDashboard, Table, User, Bell, LogIn, UserPlus, Book, CreditCard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
</style>

const links = {
  main: [
    {
      id: uuidv4(),
      label: 'Dashboard',
      href: '/',
      icon: <LayoutDashboard />
    },
    {
      id: uuidv4(),
      label: 'Profile',
      href: '/profile',
      icon: <User />
    },
    {
      id: uuidv4(),
      label: 'Tables',
      href: '/tables',
      icon: <Table />
    },
    {
      id: uuidv4(),
      label: 'Notifications',
      href: '/notifications',
      icon: <Bell />
    },
    {
      id: uuidv4(),
      label: 'Subscriptions',
      href: '/subscriptions',
      icon: <CreditCard />
    },
  ],
  authLinks: [
    {
      id: uuidv4(),
      label: 'Sign In',
      href: '/sign-in',
      icon: <LogIn />
    },
    {
      id: uuidv4(),
      label: 'Sign Up',
      href: '/sign-up',
      icon: <UserPlus />
    },
  ],
  otherLinks: [
    {
      id: uuidv4(),
      label: 'Documentation',
      href: '/documentation',
      icon: <Book />
    }
  ]
}


export default function Sidebar() {
  const location = useLocation()

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }

    return location.pathname.startsWith(href);
  }
  return (
    <aside className='pt-[43px] pl-6'>
      <ul className='mt-4 [&>li]:mt-1 w-52'>
        <p className='text-lg font-semibold text-stone-900 text-[28px] font-[Geist] mb-4'>Material Shadcn</p>
        {links.main.map(link => (
          <li className='' key={link.id}>
            <Link to={link.href}>
              <Button variant={`${isActive(link.href) ? 'gradient' : 'ghost'}`} className='py-3 px-[18px] w-full justify-start cursor-pointer'>
                <span className='[&>svg]:w-4 [&>svg]:h-4'> {link.icon}</span>
                <span className='text-sm text-start'>{link.label}</span>
              </Button>
            </Link>
          </li>
        ))}

        <Separator className='my-3' />
        <div>
          <p className='font-semibold text-stone-500 text-xs ml-[18px] pb-1 font-body leading-3'>AUTH PAGES</p>
          {links.authLinks.map(link => (
            <li className='' key={link.id}>
              <Link to={link.href} className='flex items-center gap-3 h-[38px]'>
                <Button variant='ghost' className='py-3 px-[18px] w-full justify-start cursor-pointer'>
                  <span className='[&>svg]:w-4 [&>svg]:h-4'> {link.icon}</span>
                  <span className='text-sm text-start'>{link.label}</span>
                </Button>
              </Link>
            </li>
          ))}
        </div>

        <Separator className='my-3' />

        {links.otherLinks.map(link => (
          <li className='' key={link.id}>
            <Link to={link.href} className='flex items-center gap-3 h-[38px]'>
              <Button variant='ghost' className='py-3 px-[18px] w-full justify-start cursor-pointer'>
                <span className='[&>svg]:w-4 [&>svg]:h-4'> {link.icon}</span>
                <span className='text-sm text-start'>{link.label}</span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
