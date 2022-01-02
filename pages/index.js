import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllPost } from "../lib/posts";

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, Name, Description, Price, createdAt }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${id}`}>
                <a>{Name}</a>
              </Link>
              <br />
              {Description}
              <br />
              {Price}
              <br />
              {createdAt}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let allPostsData = await getAllPost();
  return {
    props: {
      allPostsData,
    },
  };
}
