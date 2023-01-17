import PostItem from "./Posts-item";
import classes from "./posts-grid.module.css";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts &&
        posts.map((post) => {
          return <PostItem key={post.slug} post={post} />;
        })}
    </ul>
  );
};

export default PostsGrid;
