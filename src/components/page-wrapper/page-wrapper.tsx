import type { FC, PropsWithChildren } from "react";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-[1024px] mx-auto p-4 w-full mt-12 flex flex-col items-center min-h-screen">
      {children}
    </div>
  );
};
