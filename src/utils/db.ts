import mysql from "serverless-mysql";

const sql = async (query: string) => {
  return new Promise(async (resolve, reject) => {
    const connection = mysql({
      config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT as any,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      },
    });

    connection.query(query, function (err: any, result: any) {
      if (err) throw err;
      resolve(result);
      connection.end();
    });

    const result = await connection.query(query)
    resolve(result)

  });
};

export default sql;
