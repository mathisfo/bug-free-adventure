import ContinueCard from "../../components/ContinueCard";
import DonutChart from "../../components/DonutChart";
import CourseStatus from "../../components/CourseStatus";
import { Accordion } from "flowbite-react";
import TopMenu from "../../components/TopMenu";

const Courses = () => {

  const exercises = [
    {
      course: "Java",
      category: "Strings",
      name: "Inheritance 1",
      recommended: "false",
      ongoing: true,
    },
    {
      course: "Java",
      category: "If-Else",
      name: "Sum square difference",
      recommended: "true",
      ongoing: false,
    },
    {
      course: "Java",
      category: "Boolean Expressions",
      name: "Calculating the Perimeter of a Rectangle",
      recommended: "false",
      ongoing: false,
    },
  ];

  return (
    <div>
      <TopMenu />
        <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-14">
          
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
         
      <div className="h-16 background-color">

      </div>
        </div>
    </div>
  );
};

export default Courses;
