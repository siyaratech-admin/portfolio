import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-4xl z-10 w-screen mx-auto py-20 px-4 md:px-10`}>
      {children}
    </main>
  );
};
