import { trpc } from "../utils/trpc";

const Greeting = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  if (!isSuccess || isLoading) {
    return (
      <div className="mx-auto w-full rounded-md">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 py-1 pt-8">
            <div className="loading h-12 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-color my-8 grid justify-center rounded text-3xl">
      Hey, {learnerAnalytics.learner.id}!
    </div>
  );
};

export default Greeting;
