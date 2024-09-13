import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SignInButton />
      <SignUpButton />
    </>
  );
}
