import { getSinglePost, getPosts } from '@/lib/ghost';
import { Box, Heading } from 'atelier.design';

const PostPage = props => {
  return (
    <Box>
      <img src={props.post.feature_image} />
      <Heading size="2">{props.post.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </Box>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));

  // "fallback: false" gives us a 404 if post not found
  return { paths, fallback: false };
}

// Pass the page slug to "getSinglePost()" function
// Which then passes it to "posts.read()" to query the GhostContentAPI
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
