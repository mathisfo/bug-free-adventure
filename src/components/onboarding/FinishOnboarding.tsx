import { Alert, Button, Spinner } from "flowbite-react";
import router from "next/router";
import { HiInformationCircle } from "react-icons/hi";
import { api } from "../../utils/api";
const FinishOnboarding = () => {
  const mutation = api.userRouter.finishOnboarding.useMutation();
  return (
    <div>
      <h2>That is it!</h2>

      {mutation.isError && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span>
            <span className="font-medium">Ops!</span> Something went wrong
            during the onboarding process. Please contact Boban Vesin letting
            him know about this issue.
          </span>
        </Alert>
      )}

      <Button
        onClick={() => {
          mutation.mutate();

          if (mutation.isSuccess) {
            router.push("/dashboard");
          }
        }}
      >
        {mutation.isLoading ? <Spinner /> : "Finish"}
      </Button>
    </div>
  );
};

export default FinishOnboarding;
