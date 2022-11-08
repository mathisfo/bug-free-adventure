import { trpc } from "../utils/trpc";

const Greeting = () => {

    const {
        data: learnerAnalytics,
        isSuccess,
        isLoading,
      } = trpc.useQuery(["learneractivity.getLearnerActivity"]);
    
      if (!isSuccess || isLoading) {
        return (

        <div className=" flex"> 
          <div className="flex-1 space-y-6 py-1">
              <div className="animate-pulse h-12 my-8 bg-slate-200 rounded opacity-25 "></div>
            </div>
          </div>
        
        )
      }


  return (
    <div className="text-color my-8 grid justify-center rounded text-2xl">
      Hey, {learnerAnalytics.learner.id}!
    </div>
  );
};

export default Greeting;
