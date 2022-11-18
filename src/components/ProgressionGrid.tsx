import { TabItem } from "flowbite-react/lib/esm/components/Tab/TabItem"
import { useState } from "react"
import { map } from "zod"

const ProgressionGrid = () => {
    const [isShowing, setIsShowing] = useState<any>({});

    const handleHover = (index: number) => {
        setIsShowing((state: any[]) => ({
          ...state, 
        [index]: !state[index]
        }));
      };

    const modules = [
        {
            title: "Examples",
            children: [
                {
                    name: "BMI Calculator",
                    successrate: 1,
                    visited: true,
                },
                {
                    name: "Substrings",
                    successrate: 0,
                    visited: true,
                },
                {
                    name: "bais1",
                    successrate: 0,
                    visited: false,
                }
            ]
        },
        {
            title: "Coding",
            children: [
                {
                    name: "BMI Calculator",
                    successrate: 1,
                    visited: true,
                },
                {
                    name: "Substrings",
                    successrate: 0,
                    visited: false,
                },
                {
                    name: "bais",
                    successrate: 0,
                    visited: false,
                }
                ,
                {
                    name: "bais2",
                    successrate: 0,
                    visited: true,
                }
            ]
        },
        {
            title: "Challenges",
            children: [
                {
                    name: "BMI Calculator",
                    successrate: 0,
                    visited: true,
                },
                {
                    name: "Substrings",
                    successrate: 0,
                    visited: true,
                },
                {
                    name: "bais3",
                    successrate: 0,
                    visited: false,
                },
                {
                    name: "bais4",
                    successrate: 1,
                    visited: true,
                }
            ]
        },
    ]
    const boxStyling = "w-10 h-10 items-center rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
    

    return ( 
        <div className="w-1/3 space-y-1 mt-12 ">
            <div className={`grid grid-cols-4 gap-6 row-start-1 flex place-content-start items-center `}> 
                <p className="col-start-1 justify-self-end text-sm uppercase text-color font-semibold">Examples</p>
                <div className="col-start-2 col-span-3 flex flex-row space-x-1">
                    {modules.filter(item => item.title === "Examples").map(item => (
                        item.children.map((child, index) => (
                            <>
                                <div key={child.name} onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => setIsShowing(false)} className={`${boxStyling} ${child.successrate === 1 ? "bg-green-200" : child.successrate === 0 && child.visited ? "bg-blue-200" : "bg-gray-200"} `}>{isShowing[index] && 
                                    <div className="bottom-10 absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ">
                                        <div className="px-3 py-2">
                                        <p>{child.name}</p>
                                        </div>
                                        </div>}</div>
                                </>
                        ))
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 row-start-1 flex place-content-start items-center">
                <p className="col-start-1 justify-self-end text-sm uppercase text-color font-semibold">Coding</p>
                <div className="col-start-2 col-span-3 flex flex-row space-x-1">
                {modules.filter(item => item.title === "Coding").map(item => (
                        item.children.map((child, index) => (
                            <>
                                <div key={child.name} onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => setIsShowing(false)} className={`${boxStyling} ${child.successrate === 1 ? "bg-green-200" : child.successrate === 0 && child.visited ? "bg-blue-200" : "bg-gray-200"} `}>{isShowing[index] && 
                                    <div className="bottom-10 absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ">
                                        <div className="px-3 py-2">
                                        <p>{child.name}</p>
                                        </div>
                                        </div>}</div>
                                </>
                        ))
                    ))}
                
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 row-start-1 flex place-content-start items-center">
                <p className="col-start-1 justify-self-end text-sm uppercase text-color font-semibold">Challenges</p>
                <div className="col-start-2 col-span-3 flex flex-row space-x-1">
                {modules.filter(item => item.title === "Challenges").map(item => (
                        item.children.map((child, index) => (
                            <>
                                <div key={child.name} onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => setIsShowing(false)} className={`${boxStyling} ${child.successrate === 1 ? "bg-green-200" : child.successrate === 0 && child.visited ? "bg-blue-200" : "bg-gray-200"} `}>{isShowing[index] && 
                                    <div className="bottom-10 absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ">
                                        <div className="px-3 py-2">
                                        <p>{child.name}</p>
                                        </div>
                                        </div>}</div>
                                </>
                        ))
                    ))}
                </div>
            </div>
        
        </div>
    )

    // TODO: hover -> se navn, onclick -> gå til oppgaven, forklaring på farger, grid cols må settes til antall maks oppgaver, style darkmode
}

export default ProgressionGrid