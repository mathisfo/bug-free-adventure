import HistoryGraph from "./HistoryGraph";
import ExerciseHistory from "./home/ExerciseHistory";
import Leaderboard from "./Leaderboard";
import { SelectedEnum } from "@prisma/client";
import ToDoComp from "./todo/ToDoComp";

interface ISelectedComponentsProps {
  selected: Array<SelectedEnum>;
  leaderboard: boolean;
}

const SelectedComponentsContainer = (props: ISelectedComponentsProps) => {
  const { selected, leaderboard } = props;

  console.log("selected", selected);

  const components: { [key: string]: React.ReactElement } = {
    HISTORYGRAPH: (
      <div>
        <div className="text-color mb-4 mt-16 text-xl font-semibold uppercase opacity-75">
          activity graph
        </div>
        <HistoryGraph />
      </div>
    ),
    LEADERBOARD: (
      <div className="cols-start-2 row-start-1">
        <div className="text-color mb-4 text-xl font-semibold uppercase opacity-75">
          leaderboard
        </div>
        <Leaderboard />
      </div>
    ),
    EXERCISEHISTORY: (
      <div className="cols-start-1 row-start-2">
        <div className="text-color mb-4 mt-16 text-xl font-semibold uppercase opacity-75">
          history
        </div>
        <ExerciseHistory />
      </div>
    ),
    TODO: (
      <div className="cols-start-1 row-start-2">
        <div className="text-color mb-4 mt-16 text-xl font-semibold uppercase opacity-75">
          todo
        </div>
        <ToDoComp />
      </div>
    ),
  };

  return (
    <div className="grid grid-cols-2">
      {selected.map((compEnum: string) => (
        <div key={compEnum}>{components[compEnum]}</div>
      ))}
      {leaderboard && <div>{components["LEADERBOARD"]}</div>}
    </div>
  );
};

export default SelectedComponentsContainer;
