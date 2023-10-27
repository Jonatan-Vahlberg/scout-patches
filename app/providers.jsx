// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { PatchProvider } from '../context/PatchContext'

export function Providers({children}) {
  return (
    <NextUIProvider>
      <PatchProvider>
      {children}
      </PatchProvider>
    </NextUIProvider>
  )
}