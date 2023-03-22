import Layout from "@/container/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
