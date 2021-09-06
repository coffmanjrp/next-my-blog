import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
