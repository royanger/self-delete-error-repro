import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Private() {
  // const user = await currentUser();
  const { userId } = auth()
  return (
    <>
      <UserButton />
      {/* {user.id} */}
      {userId}
    </>
  );
}
