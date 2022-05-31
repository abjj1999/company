import App from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import "animate.css";
function My_app({ Component, pageProps }) {
  return (
    <SSRProvider>
      <>
        <Head>
          <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <Nav />
        <ToastContainer position="top-center" />
        <Component {...pageProps} />
        <Footer />
      </>
    </SSRProvider>
  );
}

export default My_app;
