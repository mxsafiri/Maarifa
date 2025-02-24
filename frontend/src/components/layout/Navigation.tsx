import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'K-12', href: '/k12' },
  { name: 'Higher Education', href: '/higher-education' },
  { name: 'College Students', href: '/college' },
  { name: 'Success Stories', href: '/success-stories' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="fixed left-0 right-0 top-0 z-50 backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <span className="text-xl font-semibold">Maarifa</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        router.pathname === item.href
                          ? 'text-primary'
                          : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100',
                        'inline-flex items-center px-1 pt-1 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Right side navigation items */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                <Link
                  href="/search"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Search
                </Link>
                <Link
                  href="/sign-in"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Sign In
                </Link>
                <Link
                  href="/get-started"
                  className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:hover:bg-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    router.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100',
                    'block px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-1 px-3 py-3">
                  <Disclosure.Button
                    as={Link}
                    href="/search"
                    className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  >
                    Search
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href="/sign-in"
                    className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  >
                    Sign In
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href="/get-started"
                    className="block px-3 py-2 text-base font-medium text-primary hover:bg-primary/10"
                  >
                    Get Started
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
