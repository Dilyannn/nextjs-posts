import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

export async function generateMetadata() {
  const posts = await getPosts();
  const count = posts.length;
  return {
    title: `Browse all ${count} posts`,
    description: `Browse all posts from all users in the feed. Currently ${count} posts available.`,
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
