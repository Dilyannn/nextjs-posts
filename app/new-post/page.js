import createPost from "@/actions/post.js";
import PostForm from "@/components/post-form.js";

export default function NewPostPage() {
  return (
    <>
      <PostForm action={createPost} />
    </>
  );
}
