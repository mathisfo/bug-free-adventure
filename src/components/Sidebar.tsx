import { useRouter } from "next/router"

const Sidebar = ({ target }: {target: string}) => {
    const router = useRouter()
    const path = router.asPath.split("/")

    const items = [{title: "Dashboard", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>, target: "/dashboard"}, {title: "Courses", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>, target: "/courses" }]
    

    const menuItemStyling = "flex items-center gap-2 text-sm py-4 px-6 h-12 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
    const currentItemStyling = "flex items-center gap-2 text-sm py-4 px-6 h-12 text-violet-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"

    const onClick = async (target: string, e: React.MouseEvent) => {

        e.preventDefault()
        await router.push(target)
    }

    return ( 
        <div className="w-full h-full bg-white px-1 bg-slate-100 py-4">
            <div className="mx-4 bg-white rounded-lg h-full py-2">
            <h1 className="flex items-center text-lg rounded justify-center text-gray-700 mt-24 mb-16">Protus</h1>
        <ul>
            {items.map((item) => {
                return (
                    <li onClick={(e) => onClick(item.target, e)}><a className={`${path[path.length - 1] == item.target.split("/")[path.length - 1] ? currentItemStyling : menuItemStyling}`} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">{item.icon}{item.title}</a></li>
                )
            })}
        </ul>
        </div>
      </div>
    )
}

export default Sidebar