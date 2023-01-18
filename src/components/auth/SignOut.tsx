import { useSession, signOut } from "next-auth/react";
const SignOut = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <p>Are you leaving us {session?.user?.name}?</p>
      <button type="button" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
