import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-full mx-auto px-2.5 md:px-20 w-full max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
