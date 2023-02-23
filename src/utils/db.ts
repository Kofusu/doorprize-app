import mysql from "mysql"

const sql = async (query: string) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT as any,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    
    connection.connect(function(err) {
      if (err) throw err;
      // console.log("Connected!");
    });
  
    connection.query(query, function (err: any, result: any) {
      if (err) throw err;
      resolve(result)
    });
    
    connection.end()
  })
}

export default sql