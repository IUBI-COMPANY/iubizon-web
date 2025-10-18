"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { setLocale } from "yup";
import yup from "@/config/yup.json";
import { Menu } from "lucide-react";
import { ContentWrapper } from "@/components/ui/ContentWrapper";
import { Drawer } from "@/components/ui/DrawerLayout";

export interface HeaderNavigation {
  name: string;
  href: string;
}

const navigation: HeaderNavigation[] = [
  { name: "Inicio", href: "/" },
  { name: "¿Quienes somos?", href: "/quienes-somos" },
  { name: "Productos", href: "/productos" },
  { name: "Servicio Técnico", href: "/reparaciones" },
  { name: "Contacto", href: "/contacto" },
];

export const HeaderLayout = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    setLocale(yup["es"]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={twMerge(
        "top-header top-2 left-0 w-full p-4 z-20",
        isHomePage
          ? "absolute top-0 z-20 w-full h-auto object-cover"
          : "static bg-gradient-to-r from-secondary/90 via-secondary/100 to-secondary/90",
      )}
    >
      <ContentWrapper>
        <div className="w-full text-black flex justify-between items-center">
          <div className="logo grid place-items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={300}
                height={100}
                alt="iubizon logo"
                className="w-[9em] h-auto object-contain m-auto"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    item.href === "/reparaciones"
                      ? "text-primary font-bold bg-primary/10 px-3 py-1 rounded transition-colors duration-200"
                      : "text-white/87 hover:text-white transition-colors duration-200 font-medium"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/*<div className="flex items-center space-x-4">*/}
            {/*  <button className="bg-primary">Sign In</button>*/}
            {/*  <button className="bg-primary">Get Started</button>*/}
            {/*</div>*/}
          </div>
          <button
            className="lg:hidden bg-primary rounded-md p-1"
            onClick={onOpenDrawer}
          >
            <Menu size={30} className="text-white" />
          </button>
          <Drawer
            navigation={navigation}
            isOpenDrawer={isOpen}
            onIsOpenDrawer={onOpenDrawer}
          />
        </div>
      </ContentWrapper>
    </header>
  );
};
