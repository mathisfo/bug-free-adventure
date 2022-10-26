import ContinueCard from "../../components/ContinueCard"
import MenuBar from "../../components/MenuBar"
import Sidebar from "../../components/Sidebar"
import DonutChart from "../../components/DonutChart"
import CourseStatus from "../../components/CourseStatus"

const Courses = () => {
    const exercises = [{course: "Java", category: "Strings", name: "Inheritance 1", recommended: "false", ongoing: true}, 
                        {course: "Java", category: "If-Else", name: "Sum square difference", recommended: "true", ongoing: false }, 
                        {course: "Java", category: "Boolean Expressions", name: "Calculating the Perimeter of a Rectangle", recommended: "false", ongoing: false}]

    return (
        <div>
        <MenuBar name="Johanne" />
        <div className="grid grid-cols-5 back-layer w-full h-full pt-4">
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
        <Sidebar target="/courses"></Sidebar>
        <div className="col-span-4 background-color h-full p-16 rounded-r-lg mr-4 ">
        <div className="text-3xl text-color mb-8 font-semibold">Java</div>
            <div className="flex flex-row mb-24">
                <div className="w-3/5 "><ContinueCard currentExercise="Inheritance 1" recommendedExercise="Sum square difference" /></div>
            
            <div className="w-2/5 px-20 items-center">
             
                <DonutChart progress={45}  />
               
            </div>
            </div>
            <CourseStatus />
        </div>
        </div>
        </div>
      )
}

export default Courses