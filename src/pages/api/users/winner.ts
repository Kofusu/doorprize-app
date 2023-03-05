// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sql from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "DELETE") {
    await sql(
      `DELETE FROM winner WHERE id_winner >= 1`,
    );
    res.status(200).json({ message: "success" });
  } else {
    res.status(403).json({ message: "fail" });
  }

};

export default handler;
