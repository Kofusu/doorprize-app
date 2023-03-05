import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import sql from "@/utils/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  let fileNames = "";
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public");
    options.filename = (name, ext, path, form) => {
      fileNames = "Background.png";
      return fileNames;
    };
  }

  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public"));
  }

  if (req.method === "POST") {
    const { fields, files }: any = await readFile(req, true);
    const fName = files.theFiles.newFilename
    res.status(201).json({message: "success", fName});
  } else {
    res.status(201).json({message: "fail"});
  }

};

export default handler;