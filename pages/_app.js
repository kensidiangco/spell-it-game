import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <div class="whole-page h-screen">
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `invert()`,
          opacity: 0
        }
      }}>
        <Navigation />
        <div className="font-mono">
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
      </motion.div>
    </div>
  )
}

export default MyApp
