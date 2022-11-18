import DonutChart from "./DonutChart"


const ActivityCard = ({type, bg, boxColor, fillColor}: {type:string, bg:string, boxColor:string, fillColor: string}) => {

   const chevron =  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
</svg>

    return (
        <div className={`${bg} rounded-lg  text-white w-4/5 grid grid-cols-5`}>
            <div className="col-start-1 flex flex-row col-span-3 space-x-2 font-semibold items-baseline p-4"><p className="text-6xl">5</p><p className="text-2xl lowercase">{type +"s"}</p></div>
            <div className={`${boxColor} col-start-4 col-span-2 row-span-2 rounded-lg h-full p-4`}><DonutChart size="110px" bg="white" fillColor={fillColor}/></div>
            <div className="col-start-1 flex flex-row col-span-3 items-center space-x-1 p-4 text-sm"><p className="normal-case">{"Show all " +type+"s"}</p><p>{chevron}</p></div>
        </div>
    )
}

export default ActivityCard