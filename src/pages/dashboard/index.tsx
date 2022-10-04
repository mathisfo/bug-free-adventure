import { NextPage } from "next"
import Greeting from "../../components/Greeting"
import Sidebar from "../../components/Sidebar"
import Overview from "../../components/Overview"

const Dashboard = () => {


    return (
        <div className="grid grid-cols-5">
            <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
        <Sidebar target="/dashboard"></Sidebar>
        <Overview></Overview>
        </div>
    )
}

export default Dashboard