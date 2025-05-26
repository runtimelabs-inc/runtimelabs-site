import '../styles/global.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark bg-black text-gray-100">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
