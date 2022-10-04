import CourseCard from "./CourseCard"
import Greeting from "./Greeting"

const Dashboard = () => {
    return (
        <div className="col-span-4 bg-slate-100 w-full h-full py-16 px-16">
        <Greeting name="Johanne"></Greeting>
        <div className="text-md text-gray-700 mb-4">My courses</div>
        <CourseCard course="Java" progress={45}></CourseCard>
        <div className="text-md text-gray-700 my-4">My assignments</div>
        </div>
    )
}

export default Dashboard