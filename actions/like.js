"use server";

import { updatePostLikeStatus } from "@/lib/posts.js";
import { revalidatePath } from "next/cache.js";

export default async function likePostStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}