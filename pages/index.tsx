import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chaitrali Shinde - Full stack Developer</title>
      </Head>

      {/* Header */}
      <Header />
      <div style={{ flex: 1, backgroundColor: "#cccccc", height: "1.5px"}} />
      {/* Footer */}
      <Footer />
      
    </>
  )
}

export default Home;