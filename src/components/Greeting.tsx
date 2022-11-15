import { trpc } from "../utils/trpc";

const Greeting = () => {

    const {
        data: learnerAnalytics,
        isSuccess,
        isLoading,
      } = trpc.useQuery(["learneractivity.getLearnerActivity"]);
    
      if (!isSuccess || isLoading) {
        return (

          <div className="rounded-md w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 py-1 pt-8">
              <div className="h-12 loading rounded"></div>
  
              </div>
            </div>
        </div>
        
        )
      }


  return (
    <div className="text-color my-8 grid justify-center rounded text-3xl">
      Hey, {learnerAnalytics.learner.id}!
    </div>
  );
};

export default Greeting;
