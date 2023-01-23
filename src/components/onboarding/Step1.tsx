import { Label, Radio } from "flowbite-react";

const Step1 = () => {
  return (
    <fieldset className="flex flex-col gap-4" id="radio">
      <legend>Select your prefered theme</legend>
      <div className="flex items-center gap-2">
        <Radio id="light" name="theme" value="light" />
        <Label htmlFor="light">Light</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="dark" name="theme" value="dark" />
        <Label htmlFor="dark">Dark</Label>
      </div>
    </fieldset>
  );
};

export default Step1;
