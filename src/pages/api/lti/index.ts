import { NextApiRequest, NextApiResponse } from "next";
import { Provider } from "ims-lti";
import { getSession, signIn } from "next-auth/react";
import { env } from "../../../env/server.mjs";

// Replace these with your LTI key and secret
const LTI_KEY = env.LTI_CLIENT_ID;
const LTI_SECRET = env.LTI_CLIENT_SECRET;

const ltiProvider = new Provider("mathias", LTI_SECRET);

// Middleware to validate LTI request
const validateLTIRequest = async (req: NextApiRequest) => {
  return new Promise((resolve, reject) => {
    ltiProvider.valid_request(req.body, async (err: any, isValid: any) => {
      if (err || !isValid) {
        reject(new Error("Invalid LTI request!"));
      } else {
        resolve(true);
      }
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  console.log("LTI launch request:", req.body);

  try {
    const foo = req.body;
    // Handle unauthenticated user, e.g. redirect to login page
    await signIn("credentials", {
      callbackUrl: `localhost:3000/auth/login`,
      userId: foo.user_id,
      email: foo.lis_person_contact_email_primary,
      redirect: true,
      res,
    });
    res.send("LTI launch successful");
  } catch (error) {
    console.error("LTI launch error:", error);
    res.status(400).send("LTI launch failed");
  }
}
