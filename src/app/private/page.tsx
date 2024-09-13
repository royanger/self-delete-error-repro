import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Private() {
  const user = await currentUser();
  return (
    <>
      <UserButton />
      {user?.id}
    </>
  );
}
