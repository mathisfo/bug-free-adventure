import { NextPage } from "next";

const lti: NextPage = () => {
  const lti = fetch("/api/lti").then((res) => res.json());

  return (
    <div>
      <h1>lti</h1>
      <pre>{JSON.stringify(lti, null, 2)}</pre>
    </div>
  );
};

export default lti;
