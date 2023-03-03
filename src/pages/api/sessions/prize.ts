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
    options.uploadDir = path.join(process.cwd(), "/public/img");
    options.filename = (name, ext, path, form) => {
      fileNames = Date.now().toString() + "_" + path.originalFilename;
      return Date.now().toString() + ".png";
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

const readFileProd = (
  req: NextApiRequest,
  saveLocally: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  let fileNames = "";
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.resolve('.next','static');
    options.filename = (name, ext, path, form) => {
      fileNames = Date.now().toString() + "_" + path.originalFilename;
      return Date.now().toString() + ".png";
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
  console.log(process.cwd());
  
  try {
    await fs.readdir(path.join(process.cwd() + "/public" + "/img"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public" + "/img"));
  }

  if (req.method === "POST") {
    readFileProd(req, true)
    const { fields, files }: any = await readFile(req, true);
    const { unit, caption, id_session } = fields;
    const fName = files.theFiles.newFilename;

    const result = await sql(
      `INSERT INTO prize(nama_prize, nama_gambar, id_session, max_winner) value('${caption}', '${fName}', '${id_session}', '${unit}')`,
    ).then(async () => {
      return await sql(`SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, sessions.id_session, sessions.nama_session FROM sessions inner join prize on
  sessions.id_session=prize.id_session where prize.id_session=${id_session}`).then(
        async (res: any) =>
          res.map((prize: any) => {
            return {
              id_prize: prize?.id_prize,
              nama_prize: prize?.nama_prize,
              nama_gambar: prize?.nama_gambar,
              nama_session: prize?.nama_session,
              id_session: prize?.id_session,
            };
          }),
      );
    });
    res.status(201).json(result);
  } else {
    res.status(201).json({});
  }

};

export default handler;

// import nextConnect from 'next-connect';
// import multer from 'multer';

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, Date.now().toString() + "_" + file.originalname),
//   }),
// });

// const apiRoute = nextConnect({
//   onError(error, req, res: any) {
//     res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.array('theFiles'));

// apiRoute.post((req, res) => {
//   res.status(200).json({ data: 'success' });
// });

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };