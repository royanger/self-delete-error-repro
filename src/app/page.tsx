import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SignInButton>
        <Button>Sign In</Button>
      </SignInButton>

      <SignUpButton>
        <Button>Sign Out</Button>
      </SignUpButton>

      <UserButton />

      <Link href="/private">Protected Page</Link>
    </>
  );
}
