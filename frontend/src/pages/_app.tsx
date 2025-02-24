import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
