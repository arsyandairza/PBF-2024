import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { store } from '../redux/store/store';
import { Provider } from "react-redux";

function MyApp({Component, pageProps}:any){
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  },[]);

  return (
    <Provider store={store}>
      <Component {...pageProps}/>;
    </Provider>
  )
}

export default MyApp;