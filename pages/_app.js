import App from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
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
        <Component {...pageProps} />
      </>
    </SSRProvider>
  );
}

export default My_app;
