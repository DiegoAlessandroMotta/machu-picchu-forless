import { CartIcon } from '@/Components/icons/CartIcon';
import { SearchIcon } from '@/Components/icons/SearchIcon';
import { UserIcon } from '@/Components/icons/UserIcon';
import { Head } from '@inertiajs/react';

export default function Welcome() {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <div className="bg-[#f3f3f3] selection:bg-[#d9d9d9]">
        <div className="relative flex min-h-dvh w-dvw flex-col items-center">
          <header className="flex w-full flex-col">
            <div className="bg-[#63ab45] px-4 py-0.5 text-center text-sm font-semibold text-white selection:bg-[#ffffff55]">
              +51 990913753 | machupicchuforless@gmail.com
            </div>
            <div className="relative flex items-center justify-between px-4 py-2">
              <figure className="contents">
                <img
                  src="/img/logo.png"
                  alt="Machu Picchu Forless"
                  className="h-12"
                />
              </figure>

              <nav className="absolute left-1/2 transform -translate-x-1/2">
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
                <SearchIcon />
                <UserIcon />
                <CartIcon />
              </div>
            </div>
          </header>

          <main className="flex-grow">
            <section className="flex">
              <figure className="contents">
                <img
                  src="/img/hero-bg.jpg"
                  alt="Imagen de dos personas disfrutando la vista de Machu Picchu"
                />
              </figure>
            </section>
            <div>So this is laravel huh?</div>
          </main>

          <footer className="">So this is php huh?</footer>
        </div>
      </div>
    </>
  );
}
