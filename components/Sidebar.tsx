"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import Box from "./Box";
import { ChildrenProps } from "@/types/types";
import SiderbarItem from "./SiderbarItem";
import {HiHome} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import Library from "./Library";

const Sidebar: React.FC<ChildrenProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon:HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon:BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box
          className="
          flex
          flex-col
          gap-y-4
          px-5
          py-4
        "
        >
          {routes.map((item) => (
            <SiderbarItem 
            key={item.label}
            {...item}
            />
          ))}
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library/>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
