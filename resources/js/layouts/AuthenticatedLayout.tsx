import Dropdown from '@/components/Dropdown'
import { AppLogo } from '@/components/icons/AppLogo'
import { ChartBar } from '@/components/icons/ChartBar'
import { HomeFilled } from '@/components/icons/HomeFilled'
import { SearchIcon } from '@/components/icons/SearchIcon'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import { PageProps } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import { Button } from '@mui/material'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { PropsWithChildren, useState } from 'react'

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#121621'
    },
    secondary: {
      main: '#009688'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)'
    }
  }
}

const theme = createTheme(themeOptions)

export default function Authenticated({ children }: PropsWithChildren) {
  const { user } = usePage<PageProps>().props.auth

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false)

  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-dvh flex-nowrap overflow-hidden">
        <nav className="w-full max-w-80 border-gray-100 bg-[#121621] text-white lg:max-w-[280px]">
          <div className="sticky top-0 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 px-4 pb-2 pt-4 text-white">
              <div className="flex w-full">
                <Link href={route('dashboard')} className="contents">
                  <AppLogo.base
                    className="h-14"
                    birdColor="#63AB45"
                    forlessColor="#fff"
                    machuPicchuColor="#027A7C"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <ul className="flex flex-col gap-2 px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-500">
                  Dashboards
                </h3>
                <li className="contents">
                  <NavLink
                    href={route('dashboard')}
                    active={route().current('dashboard')}
                  >
                    <HomeFilled className="h-4 w-4" />
                    <span className="ml-2">Overview</span>
                  </NavLink>
                </li>
                <li className="contents">
                  <NavLink href={'/test'} active={false}>
                    <ChartBar className="h-4 w-4" />
                    <span className="ml-2">Analytics</span>
                  </NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-500">General</h3>
                <li className="contents">
                  <NavLink href={'/test'} active={false}>
                    Tours
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="-me-2 flex items-center sm:hidden">
            <button
              onClick={() =>
                setShowingNavigationDropdown((previousState) => !previousState)
              }
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={
                    !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={
                    showingNavigationDropdown ? 'inline-flex' : 'hidden'
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            className={
              (showingNavigationDropdown ? 'block' : 'hidden') + ' md:hidden'
            }
          >
            <div className="space-y-1 pb-3 pt-2">
              <ResponsiveNavLink
                href={route('dashboard')}
                active={route().current('dashboard')}
              >
                Dashboard
              </ResponsiveNavLink>
            </div>

            <div className="border-t border-gray-200 pb-1 pt-4">
              <div className="px-4">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <ResponsiveNavLink href={route('profile.edit')}>
                  Profile
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  method="post"
                  href={route('logout')}
                  as="button"
                >
                  Log Out
                </ResponsiveNavLink>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-grow overflow-y-auto overflow-x-hidden bg-white text-zinc-900">
          <header className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
            <div>
              {/* <button className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 active:bg-gray-200">
                <SearchIcon className="h-6 w-6" />
              </button> */}
              <Button>
                <SearchIcon className="h-6 w-6" />
              </Button>
            </div>

            <div className="hidden sm:ms-6 sm:flex sm:items-center">
              <div className="relative ms-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-700 focus:outline-none active:bg-gray-200"
                      >
                        {user.name}

                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content align="right">
                    <Dropdown.Link href={route('profile.edit')}>
                      Profile
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route('logout')}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
