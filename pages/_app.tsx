// pages/_app.tsx
import { CartProvider } from "@/src/context/CartContext";
import { DarkModeProvider } from "@/src/shared/context/DarkModeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const page = <Component {...pageProps} />;
  
  return (
    <DarkModeProvider>
      <CartProvider>
        {page}
      </CartProvider>
    </DarkModeProvider>
  );
}
