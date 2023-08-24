'use client';

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

export const ClientNextUiProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark" >
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}