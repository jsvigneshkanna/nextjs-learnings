import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Helloow 🙋‍♂️, I am a software engineer exploring different technologies to fill empty space in my brain with
          knowledge
        </p>
        <p>Come lets all learn together 💃</p>
      </section>
      <ul>
        <li>
          <Link href="/firstPost">
            <a>First blog</a>
          </Link>
        </li>
        <li>
          <Link href="/firstPost">
            <a>First blog</a>
          </Link>
        </li>
        <li>
          <Link href="/firstPost">
            <a>First blog</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
