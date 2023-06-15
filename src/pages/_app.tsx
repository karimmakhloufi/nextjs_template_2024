import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const MyApp = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

// Disabling SSR
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
