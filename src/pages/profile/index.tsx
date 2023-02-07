import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-full rounded-r-lg p-16 ">
        <div className="text-color mb-12 text-xl font-semibold uppercase opacity-75">
          Profile
        </div>
        <div className="grid grid-cols-4 items-baseline border-b">
          <p className="text-color col-start-1 text-sm font-semibold uppercase">
            Name
          </p>
          <p className="text-color col-span-2 col-start-2 text-lg">
            {session?.user?.name}
          </p>
        </div>
        <div className="my-8 grid grid-cols-4 items-baseline border-b">
          <p className="text-color col-start-1 text-sm font-semibold uppercase">
            E-mail
          </p>
          <p className="text-color col-span-2 col-start-2 text-lg">
            {session?.user?.USNEmail}
          </p>
        </div>
        <div className="my-8 grid grid-cols-4 items-baseline border-b">
          <p className="text-color col-start-1 text-sm font-semibold uppercase">
            Protus ID
          </p>
          <p className="text-color col-span-2 col-start-2 text-lg">
            {session?.user?.protusId}
          </p>
        </div>
        <div className="my-8 grid grid-cols-4 items-baseline border-b">
          <p className="text-color col-start-1 text-sm font-semibold uppercase">
            User since
          </p>
          <p className="text-color col-span-2 col-start-2 text-lg"></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
