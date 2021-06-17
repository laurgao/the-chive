import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
  });
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
