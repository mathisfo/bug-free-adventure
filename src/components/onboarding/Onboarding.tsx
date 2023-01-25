import {
  Badge,
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Tooltip,
} from "flowbite-react";
import { NextPage } from "next";
import {
  HiAtSymbol,
  HiMail,
  HiQuestionMarkCircle,
  HiUser,
} from "react-icons/hi";

const Onboarding = () => {
  return (
    <div className="m-4 h-screen overflow-auto">
      <h1 className="text-3xl">Welcome</h1>
      <form className=" flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your USN Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            icon={HiMail}
            placeholder="olanor@usn.no"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Ola Nordmann"
            icon={HiUser}
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 flex">
            <Label htmlFor="protusId" value="Your ID" />
            <Tooltip content="Your Id has been given to you by mail. Please check your USN mail or contact Boban.">
              <Badge size="lg" icon={HiQuestionMarkCircle} />
            </Tooltip>
          </div>
          <TextInput
            id="protusId"
            type="text"
            placeholder="22XXX"
            icon={HiAtSymbol}
            required={true}
          />
        </div>

        <h2 className="text-2xl">Select your dashboard analytics components</h2>
        <p>
          This dashboard utilizes a number of different ways to represent your
          progress and engagement when you complete assignments. Please select
          the way you want to your dashboard to look like
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Challenge Component
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This component will show you the challenges you have completed and
            </p>
            <div className="flex items-center gap-2">
              <Checkbox id="select" />
              <Label htmlFor="select">Select</Label>
            </div>
          </Card>

          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Challenge Component
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This component will show you the challenges you have completed and
            </p>
            <div className="flex items-center gap-2">
              <Checkbox id="select" />
              <Label htmlFor="select">Select</Label>
            </div>
          </Card>

          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Challenge Component
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This component will show you the challenges you have completed and
            </p>
            <div className="flex items-center gap-2">
              <Checkbox id="select" />
              <Label htmlFor="select">Select</Label>
            </div>
          </Card>

          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Challenge Component
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This component will show you the challenges you have completed and
            </p>
            <div className="flex items-center gap-2">
              <Checkbox id="select" />
              <Label htmlFor="select">Select</Label>
            </div>
          </Card>
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Challenge Component
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This component will show you the challenges you have completed and
            </p>
            <div className="flex items-center gap-2">
              <Checkbox id="select" />
              <Label htmlFor="select">Select</Label>
            </div>
          </Card>
        </div>

        <Button className="m-8" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Onboarding;
