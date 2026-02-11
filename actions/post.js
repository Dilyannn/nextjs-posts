"use server";

import { redirect } from "next/navigation";
import { storePost } from "@/lib/posts.js";

export default async function createPost(_, formData) { // The first argument is the request object, which we can ignore in this case
  const title = formData.get("title");
  const content = formData.get("content");
  const image = formData.get("image");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required!");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required!");
  }

  if (image && image.size === 0) {
    errors.push("Image is required!");
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({
    title,
    content,
    imageUrl: "",
    userId: 1,
  });

  redirect("/feed");
}
