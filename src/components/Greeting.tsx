import { useSession } from "next-auth/react";

const Greeting = () => {
  const { data: session } = useSession();
  return (
    <div className="text-color my-8 grid justify-center rounded text-3xl">
      Hey, {session?.user?.name}!
    </div>
  );
};

export default Greeting;
