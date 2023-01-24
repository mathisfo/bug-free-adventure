import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { userRouter } from "../../server/api/routers/userRouter";
import { api } from "../../utils/api";

const Step0 = () => {
  const mutation = api.userRouter.setNameForUser.useMutation();
  const [name, setName] = useState<string>("");

  const ctx = api.useContext();
  const router = useRouter();

  const handleForm = () => {
    mutation.mutate(
      { name: name },
      {
        onSuccess: () => {
          router.push(`/${Number(1)}`);
        },
      }
    );
  };
  return (
    <>
      <h2>Your name please</h2>
      <p>Lets start of easy by typing your name...</p>
      <form onSubmit={handleForm}>
        <input
          required
          type="text"
          placeholder="Ola Normann"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Step0;
