import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 h-screen font-mono">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
