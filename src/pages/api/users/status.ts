// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sql from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { status, id } = req.body;

  sql(
    `UPDATE users SET status='${
      status === "active" ? "blacklist" : "active"
    }' WHERE id_user=${id}`,
  );

  res.status(200).json({ name: "John Doe" });
};

export default handler;
