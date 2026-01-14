"use client";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import React, { useState } from "react";
import { HeaderNavigation } from "@/components/ui/layout/HeaderLayout";
import Link from "next/link";

interface Props {
  navigation: HeaderNavigation[];
  isOpenDrawer: boolean;
  onIsOpenDrawer: () => void;
}

export function Drawer({
  navigation,
  isOpenDrawer,
  onIsOpenDrawer,
}: Props): React.ReactNode {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div
      className={`w-full h-screen flex flex-col bg-secondary bg-gradient-to-r from-secondary/90 via-secondary/100 to-secondary/90 fixed left-0 top-0 py-6 text-white transform ${isOpenDrawer ? "translate-x-0" : "translate-x-full"} duration-300 overflow-hidden z-50`}
    >
      <button className="text-white self-end px-6" onClick={onIsOpenDrawer}>
        <X size={30} />
      </button>
      <nav className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="space-y-1">
          {navigation.map((item, index) => (
            item.options ? (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full group flex items-center justify-between py-4 px-4 rounded-lg text-white/87 hover:bg-accent/50 hover:text-white transition-all duration-200 font-medium text-lg"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpenDrawer
                      ? "slideInRight 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openDropdown === item.name ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  {item.options.map((option) => (
                    <Link
                      key={option.name}
                      href={option.href}
                      className="block py-3 px-8 text-white/70 hover:text-white hover:bg-accent/30 transition-all duration-200"
                      onClick={onIsOpenDrawer}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href!}
                className="group flex items-center justify-between py-4 px-4 rounded-lg text-white/87 hover:bg-accent/50 hover:text-white transition-all duration-200 font-medium text-lg"
                onClick={onIsOpenDrawer}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpenDrawer
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <span>{item.name}</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            )
          ))}
        </div>
      </nav>
    </div>
  );
}
