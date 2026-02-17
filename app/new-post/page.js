import createPost from "@/actions/post.js";
import PostForm from "@/components/post-form.js";

export const metadata = {
  title: 'Create Post',
  description: 'Share something new with the community.',
};

export default function NewPostPage() {
  return (
    <>
      <PostForm action={createPost} />
    </>
  );
}
