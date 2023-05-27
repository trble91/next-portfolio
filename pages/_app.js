import '../styles/globals.css'

// Has to be config as such. To use on all pages. (https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp