// pages/_app.tsx
import { CartProvider } from "@/src/context/CartContext";
import { DarkModeProvider } from "@/src/shared/context/DarkModeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </DarkModeProvider>
  );
}
