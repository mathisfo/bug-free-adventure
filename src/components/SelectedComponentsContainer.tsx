import HistoryGraph from "./HistoryGraph";
import ExerciseHistory from "./home/ExerciseHistory";
import Leaderboard from "./Leaderboard";
import { SelectedEnum } from "@prisma/client";
import ToDoComp from "./todo/ToDoComp";
import CourseCard from "./CourseCard";

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
        <div className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
          activity graph
        </div>
        <HistoryGraph />
      </div>
    ),
    LEADERBOARD: (
      <div>
        <div className="text-color text-xl font-semibold uppercase opacity-75">
          leaderboard
        </div>
        <Leaderboard />
      </div>
    ),
    TODO: (
      <div>
        <div className="text-color mb-6  text-xl font-semibold uppercase opacity-75">
          todo&apos;s
        </div>
        <ToDoComp />
      </div>
    ),
    EXERCISEHISTORY: (
      <div>
        <div className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
          history
        </div>
        <ExerciseHistory />
      </div>
    ),
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <p className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
            My courses
          </p>
          <div className="flex">
            <CourseCard courseName="java" />
          </div>
        </div>
        {leaderboard && <div>{components["LEADERBOARD"]}</div>}
        {selected.map((compEnum: string) => (
          <div key={compEnum}>{components[compEnum]}</div>
        ))}
      </div>
      <div className="background-color h-32"></div>
    </div>
  );
};

export default SelectedComponentsContainer;
