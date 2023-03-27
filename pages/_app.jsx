import '@/styles/globals.css'

import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className='font-SPD'>
        <div className={`bg-white shadow-lg sticky top-0 z-10`}>
          <div className={`px-6 lg:px-[120px]`}>
            <Navbar />
          </div>
        </div>
        <Component {...pageProps} />
      </main>
    </>
  )
}
