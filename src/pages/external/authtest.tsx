import { useSession } from "next-auth/react";
import SignOut from "../../components/auth/SignOut";
import { trpc } from "../../utils/trpc";

const AuthComp = () => {
  const { data: session, status } = useSession();
  const {
    data: message,
    isLoading,
    isError,
    isSuccess,
  } = trpc.useQuery(["auth.getSecretMessage"]);
  if (status === "unauthenticated") return <p>Not authenticated</p>;
  if (!isSuccess) return <p>Loading...</p>;

  return (
    <div>
      <p>{message}</p>
      <SignOut />
    </div>
  );
};
export default AuthComp;
