'use client'

import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/navigation";
import {twMerge} from "tailwind-merge"

const Header: React.FC<ChildrenProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () =>[]

  return (
  <div className={twMerge()}>
    header
    </div>
    )
};

export default Header;
