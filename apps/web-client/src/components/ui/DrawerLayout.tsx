"use client";
import { ChevronRight, X } from "lucide-react";
import React from "react";
import { HeaderNavigation } from "@/components/ui/HeaderLayout";
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
  return (
    <div
      className={`w-full h-screen flex flex-col bg-secondary bg-gradient-to-r from-secondary/90 via-secondary/100 to-secondary/90 fixed left-0 top-0 py-6 text-white transform ${isOpenDrawer ? "translate-x-0" : "translate-x-full"} duration-300 overflow-hidden z-50`}
    >
      <button className="text-white self-end px-6" onClick={onIsOpenDrawer}>
        <X size={30} />
      </button>
      <nav className="flex-1 px-6 py-8">
        <div className="space-y-1">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                item.name === "Reparaciones"
                  ? "group flex items-center justify-between py-4 px-4 rounded-lg text-primary font-bold bg-primary/10 transition-all duration-200 text-lg"
                  : "group flex items-center justify-between py-4 px-4 rounded-lg text-white/87 hover:bg-accent/50 hover:text-white transition-all duration-200 font-medium text-lg"
              }
              onClick={() => onIsOpenDrawer()}
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
          ))}
        </div>
      </nav>
    </div>
  );
}
