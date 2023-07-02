"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./Box";
import { ChildrenProps } from "@/types/types";
import SiderbarItem from "./SiderbarItem";

const Sidebar: React.FC<ChildrenProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
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
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default Sidebar;
