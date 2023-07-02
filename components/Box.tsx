import { ChildrenProps } from "@/types/types";
import { twMerge } from "tailwind-merge";

const Box: React.FC<ChildrenProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
       bg-neutral-900
       rounded-lg
       h-fit
       `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
