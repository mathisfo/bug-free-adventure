import { useSession } from "next-auth/react";

const Greeting = () => {
  const { data: session } = useSession();
  return (
    <div className="text-color rounded text-3xl">
      Hey, {session?.user?.name}!
    </div>
  );
};

export default Greeting;
