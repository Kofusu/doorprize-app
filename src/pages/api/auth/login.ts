// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sql from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method);
  if (req.method === "POST") {
    const {username, password} = req.body
    const authUser = await sql(`SELECT * FROM auth WHERE username='${username}'`).then((ress: any) => {   
      if (ress[0]?.password === password) {
        return {
          username: ress[0].username,
          success: true
        }
      }
      return {username: ""}
    })
    res.status(200).json(authUser);  
  } else {
    res.status(200).json({username: ""});  
  }
};

export default handler;
