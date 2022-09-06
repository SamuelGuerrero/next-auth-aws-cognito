import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {session ? (
        <>
          Signed in as {session?.user?.email}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br/>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
    </div>
  );
};

export default Home;
