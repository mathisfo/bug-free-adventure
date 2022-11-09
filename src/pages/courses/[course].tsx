import { useRouter } from "next/router";
import CourseStatus from "../../components/CourseStatus";

const CoursePage = () => {
  const router = useRouter();
  const { course } = router.query;

  return <CourseStatus course={course} />;
};

export default CoursePage;
