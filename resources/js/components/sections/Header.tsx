import { CartIcon } from '@/components/icons/CartIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { Button } from '@headlessui/react'
import { Link } from '@inertiajs/react'

export const Header = () => {
  return (
    <header className="flex w-full flex-col">
      <div className="bg-primary px-4 py-0.5 text-center text-sm font-semibold text-white">
        +51 990913753 | machupicchuforless@gmail.com
      </div>
      <div className="px-4 md:px-8">
        <div className="relative mx-auto flex max-w-screen-xl items-center justify-between py-2">
          <Link href='/' prefetch>
            <figure className="contents">
              <img
                src="/img/logo.png"
                alt="Machu Picchu Forless"
                className="h-12"
              />
            </figure>
          </Link>

          <nav className="absolute left-1/2 -translate-x-1/2 transform">
            <ul className="flex gap-6">
              <li>
                <a href="#">Tour Packages</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
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
        </div>
      </div>
    </header>
  )
}
