import Prompts from "@/components/Prompts";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const user = await currentUser();
  console.log(user);
  return (
    <>
      <Prompts />
    </>
  );
}
