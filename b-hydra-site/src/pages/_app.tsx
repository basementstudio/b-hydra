import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import 'css/global.css'
import 'css/tailwind.css'
import { Toaster } from 'react-hot-toast'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </ThemeProvider>
  )
}

export default App
