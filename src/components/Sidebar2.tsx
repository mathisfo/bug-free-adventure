import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'

import { trpc } from "../utils/trpc";
import {
  ChartBarIcon,
  FolderIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Greeting from './Greeting'
import ToggleTheme from './ToggleTheme';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon, current: true },
  { name: 'Courses', icon: FolderIcon, current: false, children: [
    { name: 'Java', href: '/courses' },
    { name: 'Python', href: '/courses' },
  ], },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

 const Sidebar2 = ({ children }: { children: React.ReactElement }) => {
    const {
        data: learnerAnalytics,
        isSuccess,
        isLoading,
      } = trpc.useQuery(["learneractivity.getLearnerActivity"]);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:m-4 md:h-full">
          <div className="flex flex-grow flex-col overflow-y-auto border-r bg-white pt-8 rounded-l-lg md:h-full">
            <div className="flex flex-shrink-0 justify-center px-4">
            <Greeting />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <item.icon
                        className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
            </div>
            
            
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4 mb-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                  {isLoading || !isSuccess ? (
        <div className="flex items-center justify-center">
          <div
            className="spinner-border inline-block h-6 w-6 animate-spin rounded-full border-4 text-gray-300"
            role="status"
          >
          </div>
        </div>
      ) : (
        <div className="text-color">{learnerAnalytics.learner.id}</div>
      )}
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                
                  </div>
                  <div className="ml-8">
                  <ToggleTheme />
                  </div>
                </div>
              </a>
            </div>
          
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-60">
        <main className="flex-1 ">
            <div className="py-4">
              
              <div className="px-4 h-screen">
                {children}
              </div>
            </div>
          </main>
          </div>
      </div>

    </>
  )
}

export default Sidebar2