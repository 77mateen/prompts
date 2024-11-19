import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import User from "@/models/user";
import { connecDb } from "@/utils/dbConnect";
import Link from "next/link";

async function Navbar() {
  const { userId } = await auth();
  const user = await currentUser();
  console.log(userId);

  if (userId) {
    await connecDb();
    const userExists = await User.findOne({
      email: user.emailAddresses[0].emailAddress,
    });

    if (!userExists) {
      await User.create({
        email: user.emailAddresses[0].emailAddress,
        username: user.firstName,
      });
    }
  }
  return (
    <nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Link href={"/create"}>Create</Link>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

export default Navbar;
