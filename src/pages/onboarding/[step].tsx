import { Breadcrumb, Button } from "flowbite-react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import Step1 from "../../components/onboarding/Step1";
import Step2 from "../../components/onboarding/Step2";
import Step3 from "../../components/onboarding/Step3";

const Steps: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;

  const [currentStep, setCurrentStep] = useState(step);

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  const handleNext = () => {
    router.push(`/onboarding/${Number(currentStep) + 1}`);
  };

  const handlePrevious = () => {
    router.push(`/onboarding/${Number(currentStep) - 1}`);
  };

  return (
    <div>
      <h1>Step {currentStep}</h1>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="1" icon={HiHome}>
          Welcome
        </Breadcrumb.Item>
        <Breadcrumb.Item href="2">Theme</Breadcrumb.Item>
        <Breadcrumb.Item href="3">Components</Breadcrumb.Item>
      </Breadcrumb>

      {currentStep === "1" && <Step1 />}
      {currentStep === "2" && (
        <div>
          <Step2 />
        </div>
      )}
      {currentStep === "3" && (
        <div>
          <Step3 />
        </div>
      )}
      <Button onClick={handleNext}>Next</Button>
      <Button onClick={handlePrevious}>Previous</Button>
    </div>
  );
};

export default Steps;
