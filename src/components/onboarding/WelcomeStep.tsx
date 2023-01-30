import { Alert, Button } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { api } from "../../utils/api";

const WelcomeStep = () => {
  const mutation = api.userRouter.setNameForUser.useMutation();
  const [name, setName] = useState<string>("");

  const handleForm = () => {
    mutation.mutate({ name: name });
  };
  return (
    <>
      {mutation.isSuccess && (
        <Alert color="success">
          <span>
            <span className="font-medium">Success!</span> Now we know your name
          </span>
        </Alert>
      )}

      {mutation.isError && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span>
            <span className="font-medium">Ops!</span> Something wrong happend
            while trying to get your name. Contact Boban Vesin if the issue
            persists.
          </span>
        </Alert>
      )}
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
        <Button type="submit">
          {mutation.isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default WelcomeStep;
