import { Fraunces, JetBrains_Mono } from 'next/font/google';
import Layout from '../components/Layout';
import '../styles/tokens.css';
import '../styles/globals.css';

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${serif.variable} ${mono.variable}`} style={{ minHeight: '100vh' }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
