import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
);

export default MyApp;
