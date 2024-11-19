"use server";

import Prompt from "@/models/prompt";
import { connecDb } from "@/utils/dbConnect";
import { currentUser } from "@clerk/nextjs/server";

export async function createPrompt(formdata) {
  const user = await currentUser();
  const prompt = formdata.get("prompt");
  const tag = formdata.get("tag");
  await connecDb();
  await Prompt.create({
    author: user.id,
    prompt: prompt,
    tag: tag,
  });
}
