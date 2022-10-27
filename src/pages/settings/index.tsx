import MenuBar from "../../components/MenuBar";
import Sidebar from "../../components/Sidebar";

const Settings = () => {
  return (
    <div>
      <MenuBar name="Johanne" />
      <div className="back-layer grid h-full w-full grid-cols-5 pt-4">
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
        <div className="background-color col-span-4 mr-4 h-full rounded-r-lg p-16 ">
          <div className="text-color mb-4 text-xl font-semibold ">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
