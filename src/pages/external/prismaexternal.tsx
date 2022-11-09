import Link from "next/link";
import { trpc } from "../../utils/trpc";

const PrismaExternal = () => {
  const {
    data: modules,
    error: moduleError,
    isLoading: moduleIsLoading,
  } = trpc.useQuery([
    "course.getModuleOnCourseName",
    { courseNameInput: "Java" },
  ]);

  const {
    data: activityResources,
    error: activityError,
    isLoading: activityLoading,
  } = trpc.useQuery([
    "course.getActivityResourcesOnCourseId",
    { courseIdInput: 3 },
  ]);

  if (moduleIsLoading || activityLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div>
        {modules?.map((module) => (
          <li key={module.id}>{module.moduleName}</li>
        ))}
      </div>
      <br />

      <div>
        {activityResources?.map((ActivityResource) => {
          const url = new URL(ActivityResource.url);
          url.searchParams.set("usr", "norway22169");
          url.searchParams.set("grp", "NorwayFall2022B");

          return (
            <li key={ActivityResource.id}>
              <Link
                href={
                  url
                }
              >
                {ActivityResource.name}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default PrismaExternal;
