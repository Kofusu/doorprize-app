// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sql from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { namaSessions } = req.body;
  

  const result = await sql(
    `INSERT INTO sessions(nama_session) value('${namaSessions}')`,
  ).then(async () => {
    return await sql("SELECT * FROM sessions").then((ress: any) => ress.map((sess: any) => {
      return {
        id_session: sess?.id_session,
        nama_session: sess?.nama_session
      }
    }))
  });


  res.status(200).json(result);
};

export default handler;
