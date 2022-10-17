import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className='w-full max-w-xl mx-auto'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

