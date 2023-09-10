import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global-styles";
import Providers from "../utils/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <GlobalStyles />
    </Providers>
  );
}
