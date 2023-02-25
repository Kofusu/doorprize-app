import mysql from "serverless-mysql";

const connection = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT as any,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
});

const sql = async (query: string) => {
  return new Promise(async (resolve, reject) => { 
    const result = await connection.query(query)
    resolve(result)
    connection.end();
  });
};

export default sql;
