import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CounterComponent from "../components/CounterComponent";
import Logo from "../../public/logo.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt={"Logo"} />
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <CounterComponent />
      </main>
    </div>
  );
};

export default Home;
