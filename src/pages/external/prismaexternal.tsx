import { trpc } from "../../utils/trpc";

const PrismaExternal = () => {
  const { data: course, isLoading } = trpc.useQuery(["course.getCourses"]);
  const { data: modules, isLoading: moduleIsLoading } = trpc.useQuery([
    "course.getModuleOnCourseName",
    { courseNameInput: "Java" },
  ]);

  if (isLoading || moduleIsLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div>{course?.map((course) => course.courseName)}</div>
      <div>{modules?.map((module) => module.moduleName)}</div>
    </>
  );
};

export default PrismaExternal;
