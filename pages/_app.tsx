import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
);

export default MyApp;
