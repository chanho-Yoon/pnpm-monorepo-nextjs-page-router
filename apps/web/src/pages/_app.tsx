import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import baseCSS from '@assets/styles/baseCSS';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={baseCSS} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
