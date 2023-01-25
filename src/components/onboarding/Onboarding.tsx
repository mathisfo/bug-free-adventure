import { Breadcrumb, Button, Pagination } from "flowbite-react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import Step0 from "../../components/onboarding/Step0";
import Step1 from "../../components/onboarding/Step1";
import Step2 from "../../components/onboarding/Step2";
import Step3 from "../../components/onboarding/Step3";

const Steps: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const onPageChange = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="1" icon={HiHome}>
          Welcome
        </Breadcrumb.Item>
        <Breadcrumb.Item>Research Credentials</Breadcrumb.Item>
        <Breadcrumb.Item href="2">Theme</Breadcrumb.Item>
        <Breadcrumb.Item href="3">Components</Breadcrumb.Item>
      </Breadcrumb>

      {<Step0 />}
      {<Step1 />}
      {<Step2 />}
      {<Step3 />}

      <Pagination
        currentPage={currentPage}
        layout="navigation"
        totalPages={4}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Steps;
