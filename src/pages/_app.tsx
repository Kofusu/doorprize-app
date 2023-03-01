import AuthContextProvider from "@/context/authContext";
import "@/styles/globals.css";
import { NextPageWithLayout } from "@/utils/types";
import type { AppProps } from "next/app";
import { QueryClient } from "react-query";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <AuthContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </AuthContextProvider>
  );
};

export default App;
