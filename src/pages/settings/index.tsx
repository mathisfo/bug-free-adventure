import MenuBar from "../../components/MenuBar"
import Sidebar from "../../components/Sidebar"

const Settings = () => {
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
        <Sidebar target="/settings"></Sidebar>
        <div className="col-span-4 background-color h-full p-16 rounded-r-lg mr-4 ">
            <div className="text-xl text-color mb-4 font-semibold ">Settings</div>
        </div>
        </div>
        </div>
      )
}

export default Settings