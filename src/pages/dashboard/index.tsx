import Sidebar from "../../components/Sidebar";
import MenuBar from "../../components/MenuBar";
import CourseCard from "../../components/CourseCard";
import Assignments from "../../components/Assignments";

const Dashboard = () => {
  const courses = [
    {
      course: "Java",
      progress: 45,
      completedTasks: 7,
      allTasks: 23,
      bg: "course-card",
      iconColor: "bg-blue-400",
    },
    {
      course: "Python",
      progress: 20,
      completedTasks: 5,
      allTasks: 25,
      bg: "second-course-card",
      iconColor: "bg-rose-400",
    },
  ];

  return (
    <div>
      <MenuBar name="Johanne" />
      <div className="back-layer grid h-full w-full grid-cols-5 pt-4">
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
        <Sidebar target="/dashboard"></Sidebar>

        <div className="background-color col-span-4 mr-4 h-full rounded-r-lg p-16 ">
          <div className="text-color mb-4 text-xl font-semibold">
            My courses
          </div>
          <div className="flex flex-row">
            {courses.map((course) => {
              return (
                <CourseCard
                  key={course.course}
                  course={course.course}
                  progress={course.progress}
                  completedTasks={course.completedTasks}
                  allTasks={course.allTasks}
                  color={course.bg}
                  iconColor={course.iconColor}
                ></CourseCard>
              );
            })}
          </div>
          <div className="text-color mt-8 mb-4 text-lg font-semibold">
            My assignments
          </div>
          <Assignments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
