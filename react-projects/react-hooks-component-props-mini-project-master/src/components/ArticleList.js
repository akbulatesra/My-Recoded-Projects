import Article from './Article';

const ArticleList = ({ posts }) => {
  const singlePost = posts.map((post) => {
    return (
      <Article
        key={post.id}
        date={post.date}
        title={post.title}
        preview={post.preview}
      />
    );
  });
  return <main>{singlePost}</main>;
};

export default ArticleList;
