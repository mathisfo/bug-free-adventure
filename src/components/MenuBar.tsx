import ToggleTheme from "./ToggleTheme"

const MenuBar = ({name}: {name: string}) => {
    const profilePicture = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  
 return (

    <div className="flex flex-row absolute right-8 top-8 items-center gap-4">
        <div className="mr-8">
        <ToggleTheme/></div>

        <div className="text-color">{name}</div>
        <div className="rounded-3xl p-2 w-12 icon items-end">{profilePicture}</div>
        

    </div>
 )
}

export default MenuBar