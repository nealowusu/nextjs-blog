import ReactMarkdown from "react-markdown";
import Image from "next/legacy/image";
import { PrismLight as SyntaxHighligter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./Post-Header";
import classes from "./post-content.module.css";

SyntaxHighligter.registerLanguage("js", js);
SyntaxHighligter.registerLanguage("css", css);

const DUMMY_POSTS = {
  slug: "getting-started-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt:
    "NextJS is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = (props) => {
  const { post } = props;
  const imageLink = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragrah) {
      const { node } = paragrah;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragrah.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighligter style={atomDark} language={language}>
          {children}
        </SyntaxHighligter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imageLink} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
