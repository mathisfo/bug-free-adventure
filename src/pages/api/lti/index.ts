import { NextApiHandler } from "next";
import { Provider } from "ims-lti";
import { env } from "../../../env/server.mjs";

const LTIPage: NextApiHandler = async (req, res) => {
  console.log(req.body);
  const provider = new Provider(
    req.body.oauth_consumer_key,
    env.LTI_CLIENT_SECRET
  );

  if (provider.valid_request) {
    console.log("Valid request");
  }

  return res.status(200).json(req.body);
};

export default LTIPage;
