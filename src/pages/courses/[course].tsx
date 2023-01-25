import ContinueCard from "../../components/ContinueCard";
import CourseStatus from "../../components/CourseStatus";
import DonutChart from "../../components/DonutChart";
import TopMenu from "../../components/TopMenu";

const Courses = () => {
  return (
    <div>
      <TopMenu currentPage={""} currentType={""} />
      <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-14">
        <div className="mb-24 flex flex-row">
          <div className="w-3/5 ">
            <ContinueCard
              currentExercise="Inheritance 1"
              recommendedExercise="Sum square difference"
            />
          </div>

          <div className="w-2/5 items-center px-20">
            <DonutChart
              size="176px"
              bg="#d1d5db"
              fillColor="#60a5fa"
              fillColorDark="#f97316"
            />
          </div>
        </div>
        <CourseStatus />
        <div className="background-color h-32"></div>
      </div>
    </div>
  );
};

export default Courses;
