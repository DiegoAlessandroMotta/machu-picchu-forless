import { Bars3Icon } from '@/components/icons/Bars3Icon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { XMarkIcon } from '@/components/icons/XMarkIcon'
import { Link } from '@inertiajs/react'
import { useRef, useState } from 'react'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const menuLinks = [
    { href: '#', text: 'Tour Packages' },
    { href: '#', text: 'Destinations' },
    { href: '#', text: 'About us' }
  ]

  const toogleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu)
  }

  /* Close the mobile menu when the user clicks outside */
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (event.target === null || menuRef.current === null) {
  //       return
  //     }

  //     const isClickInsideMenu = menuRef.current.contains(event.target as Node)

  //     if (!isClickInsideMenu) {
  //       setShowMenu((prevShowMenu) => {
  //         console.log(isClickInsideMenu, prevShowMenu)

  //         if (prevShowMenu) {
  //           return false
  //         }

  //         return true
  //       })
  //     }
  //   }

  //   document.addEventListener('click', handleClickOutside)

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [])

  return (
    <header className="z-30 flex w-full flex-col">
      <div className="bg-primary px-4 py-0.5 text-center text-sm font-semibold text-white">
        +51 990913753 | machupicchuforless@gmail.com
      </div>
      <div className="relative px-4 md:px-8">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between py-2">
          <Link href="/" prefetch>
            <figure className="contents">
              <img
                src="/img/logo.webp"
                alt="Machu Picchu Forless"
                className="h-12"
              />
            </figure>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 transform lg:block">
            <ul className="flex gap-2 px-2 text-black [&>li>a:hover]:text-black [&>li>a:hover]:after:bg-black [&>li>a]:inline-block [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:transition [&>li>a]:after:block [&>li>a]:after:h-[2px] [&>li>a]:after:w-full [&>li>a]:after:rounded-full [&>li>a]:after:bg-transparent [&>li>a]:after:transition [&>li>a]:after:duration-300 [&>li]:contents">
              {menuLinks.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} prefetch>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden gap-4 lg:flex">
            <button className="flex">
              <SearchIcon />
            </button>
            {/* <Button>
              <UserIcon />
            </Button>
            <Button>
              <CartIcon />
            </Button> */}
          </div>

          <div
            className="z-10 flex justify-end gap-1 p-1 lg:hidden"
            onClick={() => toogleMenu()}
          >
            <Bars3Icon
              className={`bars-icon h-8 w-8 text-black ${showMenu ? 'hidden' : ''}`}
            />
            <XMarkIcon
              className={`x-mark-icon h-8 w-8 text-black ${showMenu ? '' : 'hidden'}`}
            />
          </div>
        </div>
        <div
          className={`absolute left-0 top-0 flex w-full flex-col justify-center overflow-y-hidden bg-white/70 backdrop-blur transition-all duration-300 lg:hidden ${
            showMenu ? 'h-36' : 'h-0'
          }`}
          ref={menuRef}
        >
          <ul className="mx-auto flex w-fit flex-col items-center px-2 text-black [&>li>a:hover]:text-black [&>li>a:hover]:after:bg-black [&>li>a]:inline-block [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:transition [&>li>a]:after:block [&>li>a]:after:h-[2px] [&>li>a]:after:w-full [&>li>a]:after:rounded-full [&>li>a]:after:bg-transparent [&>li>a]:after:transition [&>li>a]:after:duration-300 [&>li]:contents">
            {menuLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  prefetch
                  onClick={() => setShowMenu(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
