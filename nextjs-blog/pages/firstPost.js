import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
const firstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First post</h1>
        <Image src="/images/profile.jpg" alt="profile image" height={144} width={144} />
      </div>
      <section>
        <h4>Here we will learning react famous framework known as NextJS</h4>
        <p>Come lets all learn together</p>
      </section>
    </Layout>
  );
};

export default firstPost;
