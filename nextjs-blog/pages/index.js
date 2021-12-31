import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Home</title>
        <meta name="description" content="demo blog for vk using nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hi Vignesh</h1>
    </div>
  );
}
