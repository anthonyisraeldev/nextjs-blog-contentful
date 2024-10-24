import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";

export const dynamic = "auto";
export const fetchCache = "auto";
export const revalidate = 10;

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center max-lg:hidden  p-16">
        <ul className="flex space-x-4 justify-start items-center">
          <li>
            <Link href="/">
              {/* <Image
                src="/next.svg"
                alt="Logo"
                width={100}
                height={100}
                className="mr-8 dark:filter dark:invert"
              /> */}
            </Link>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/">Entradas</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/categories">Categorias</Link>
            </Button>
            {/* Categorias */}
            {/* <DropdownCategorias categorias={categoriasUnicas} /> */}
          </li>
        </ul>
        <div className="flex gap-4">
          {/* <Buscador posts={posts} /> */}
          Buscador
          <ThemeSwitcher />
        </div>
      </nav>
      <nav className="hidden max-lg:flex justify-center flex-col items-center p-16 gap-6">
        <ul>
          <li>
            <Link href="/">
              <Image
                src="/next.svg"
                alt="Logo"
                width={100}
                height={100}
                className="mr-8 dark:filter dark:invert"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4 justify-end items-center">
          <li>
            <Button variant="ghost">
              {" "}
              <Link href="/entradas">Entradas</Link>
            </Button>
          </li>
          <li>
            {/* Categorias */}
            <Button variant="ghost">
              <Link href="/categories">Categorias</Link>
            </Button>
            {/* <DropdownCategorias categorias={categoriasUnicas} /> */}
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
        Buscador
        {/* <Buscador posts={posts} /> */}
      </nav>
    </>
  );
};

export default Navbar;
