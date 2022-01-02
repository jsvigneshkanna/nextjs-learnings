import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>Welcome the individual blog 📑</h1>
      <h3>{postData.name}</h3>
      <br />
      {postData.Description}
      <br />
      {postData.Price}
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id

  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id

  let postData = await getPostData(params.id);
  postData = postData.attributes;
  return {
    props: {
      postData,
    },
  };
}
