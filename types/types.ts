import { IconType } from "react-icons";

export interface ChildrenProps{
    children: React.ReactNode;
    className?: string;
}

export interface SidebarItemProps{
    icon:IconType;
    label:string;
    active?: boolean;
    href:string
}