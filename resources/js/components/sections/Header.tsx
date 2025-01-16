import { Bars3Icon } from '@/components/icons/Bars3Icon'
import { CartIcon } from '@/components/icons/CartIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { XMarkIcon } from '@/components/icons/XMarkIcon'
import { Button } from '@headlessui/react'
import { Link } from '@inertiajs/react'
import { useEffect } from 'react'

export const Header = () => {
  useEffect(() => {
    const $toggleMenu = document.querySelector('.toggle-menu')
    const $barsIcon = document.querySelector('.bars-icon')
    const $xMarkIcon = document.querySelector('.x-mark-icon')
    const $mobileMenu = document.querySelector('.mobile-menu')
    const $menuLinks = document.querySelectorAll('.mobile-menu a')

    const maxHeight = 'h-36'
    const minHeight = 'h-0'

    if (
      !($toggleMenu instanceof HTMLElement) ||
      !($barsIcon instanceof SVGElement) ||
      !($xMarkIcon instanceof SVGElement) ||
      !($mobileMenu instanceof HTMLElement) ||
      !($menuLinks instanceof NodeList)
    ) {
      return
    }

    let showMenu = false

    const toggleMenu = (e: MouseEvent) => {
      e.preventDefault()

      $barsIcon.classList.toggle('hidden')
      $xMarkIcon.classList.toggle('hidden')
      $mobileMenu.classList.toggle(minHeight)
      $mobileMenu.classList.toggle(maxHeight)

      showMenu = !showMenu
    }

    const closeMenu = () => {
      $barsIcon.classList.remove('hidden')
      $xMarkIcon.classList.add('hidden')
      $mobileMenu.classList.remove(maxHeight)
      $mobileMenu.classList.add(minHeight)
      showMenu = false
    }

    const handleDocumentClick = (e: MouseEvent) => {
      const isClickInsideMenu = $mobileMenu.contains(e.target as Node)
      const isClickInsideToggle = $toggleMenu.contains(e.target as Node)

      if (!isClickInsideMenu && !isClickInsideToggle && showMenu) {
        closeMenu()
      }
    }

    const registerEventListeners = () => {
      $menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu)
      })
      document.addEventListener('click', handleDocumentClick)
      $toggleMenu.addEventListener('click', toggleMenu)
    }

    const removeEventListeners = () => {
      $menuLinks.forEach((link) => {
        link.removeEventListener('click', closeMenu)
      })
      document.removeEventListener('click', handleDocumentClick)
      $toggleMenu.removeEventListener('click', toggleMenu)
    }

    registerEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [])

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
            <ul className="flex gap-6">
              <li>
                <Link href="#">Tour Packages</Link>
              </li>
              <li>
                <Link href="#">Destinations</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
            </ul>
          </nav>

          <div className="hidden gap-4 lg:flex">
            <Button>
              <SearchIcon />
            </Button>
            <Button>
              <UserIcon />
            </Button>
            <Button>
              <CartIcon />
            </Button>
          </div>

          <div className="toggle-menu z-10 flex justify-end gap-1 p-1 lg:hidden">
            <Bars3Icon className="bars-icon h-8 w-8 text-black" />
            <XMarkIcon className="x-mark-icon hidden h-8 w-8 text-black" />
          </div>
        </div>
        <div className="mobile-menu absolute left-0 top-0 flex h-0 w-full flex-col justify-center overflow-y-hidden bg-white/70 backdrop-blur transition-all duration-300 md:hidden">
          <ul className="mx-auto flex w-fit flex-col items-center px-2 text-black [&>li>a:hover]:text-black [&>li>a:hover]:after:bg-black [&>li>a]:inline-block [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:transition [&>li>a]:after:block [&>li>a]:after:h-[2px] [&>li>a]:after:w-full [&>li>a]:after:rounded-full [&>li>a]:after:bg-transparent [&>li>a]:after:transition [&>li>a]:after:duration-300 [&>li]:contents">
            <li>
              <Link href="#">Tour Packages</Link>
            </li>
            <li>
              <Link href="#">Destinations</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
