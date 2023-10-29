// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PatchProvider } from "../context/PatchContext";
import { UserProvider } from "@/context/UserContext";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <UserProvider>
        <PatchProvider>{children}</PatchProvider>
      </UserProvider>
    </NextUIProvider>
  );
}
