import "@/styles/globals.css";
import { NextPageWithLayout } from "@/utils/types";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (Component.getLayout) {
    Component.getLayout(
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>,
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
