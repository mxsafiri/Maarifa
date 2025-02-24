import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Learning Path', href: '/learning-path', icon: AcademicCapIcon },
  { name: 'Library', href: '/library', icon: BookOpenIcon },
  { name: 'Progress', href: '/progress', icon: ChartBarIcon },
  { name: 'Community', href: '/community', icon: UsersIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0F1117]">
      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#1A1D24] px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                      Maarifa AI
                    </Link>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={clsx(
                                  router.pathname === item.href
                                    ? 'bg-[#22252D] text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-[#22252D]',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#1A1D24] px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Maarifa AI
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          router.pathname === item.href
                            ? 'bg-[#22252D] text-white'
                            : 'text-gray-400 hover:text-white hover:bg-[#22252D]',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-[#2D3748] bg-[#1A1D24] px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
