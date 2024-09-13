import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignInButton>
        <Button>Sign Out</Button>
      </SignInButton>

      <SignUpButton>
        <Button>Sign Out</Button>
      </SignUpButton>
      <UserButton />
    </>
  );
}
