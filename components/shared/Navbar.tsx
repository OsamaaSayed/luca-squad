"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navLinks } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute left-0 right-0 top-10 text-white">
      <ul className="flex items-center justify-center gap-4">
        {navLinks.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li
              key={item.label}
              className={`cursor-pointer ${isActive ? "border-b-2" : ""}`}
            >
              <Link href={item.path} className={``}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
