import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/Featured-Posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Neal&apos;s Blog</title>
        <meta
          name='description'
          content='I post about programing and web development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// 1) Hero => Present Ourselves
// 2) Featured Posts
