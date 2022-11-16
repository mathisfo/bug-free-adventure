import ContinueCard from "../../components/ContinueCard";
import DonutChart from "../../components/DonutChart";
import CourseStatus from "../../components/CourseStatus";
import { useRouter } from "next/router";

const Courses = () => {
  const router = useRouter();
  const { course } = router.query;

  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-14">
        <div className="text-color mb-8 text-3xl font-semibold">{course}</div>
        <div className="mb-24 flex flex-row">
          <div className="w-3/5 ">
            <ContinueCard
              currentExercise="Inheritance 1"
              recommendedExercise="Sum square difference"
            />
          </div>

          <div className="w-2/5 items-center px-20">
            <DonutChart />
          </div>
        </div>
        <CourseStatus />
        <div className="background-color h-16"></div>
      </div>
    </div>
  );
};

export default Courses;
