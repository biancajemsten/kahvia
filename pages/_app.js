import "../styles/antd.less";
import Head from "next/head";
import "../styles/index.scss";
import {HeaderComponent as Header} from '../components/Header';
// import App from 'next/app'


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Head>
      <title>Paulig Data Dashboard</title>
      <link rel="icon" href="/coffee-icon.png" />
    </Head>
    <main>
  
    <Header/>
    <div style={{paddingLeft:48, paddingRight: 48, height: 100}}>
    <Component {...pageProps}/>
    </div>
    </main>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
