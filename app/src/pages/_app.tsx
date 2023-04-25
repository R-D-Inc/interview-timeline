import { useState } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'



function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {!isDarkMode && <div className="light-mode">
        <div className="mode-change-box">
          Change to {isDarkMode ? 'light' : 'dark'} mode <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        </div>
        <Component {...pageProps} />
      </div>}
      {isDarkMode && <div className="dark-mode">
        <div className="mode-change-box">
          Change to {isDarkMode ? 'light' : 'dark'} mode <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        </div>
        <Component {...pageProps} />
      </div>}
    </>)
}
export default App
