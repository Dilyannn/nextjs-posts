"use server";

import { updatePostLikeStatus } from "@/lib/posts.js";

export default async function likePostStatus(postId) {
  await updatePostLikeStatus(postId, 2);
}