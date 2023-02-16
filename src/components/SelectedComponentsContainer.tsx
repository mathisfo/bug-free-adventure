import HistoryGraph from "./HistoryGraph";
import ExerciseHistory from "./home/ExerciseHistory";
import Leaderboard from "./Leaderboard";
import { SelectedEnum } from "@prisma/client";

interface ISelectedComponentsProps {
  selected: Array<SelectedEnum>;
}

const SelectedComponentsContainer = (props: ISelectedComponentsProps) => {
  const { selected } = props;

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
        <p>TODO comp here when merged</p>
      </div>
    ),
  };

  return (
    <div>
      {selected.map((compEnum: string) => (
        <div key={compEnum}>{components[compEnum]}</div>
      ))}
    </div>
  );
};

export default SelectedComponentsContainer;
