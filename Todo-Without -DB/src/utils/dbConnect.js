import sql from 'mssql'
import dotenv from 'dotenv'
import logger from '../utils/logger.js'

dotenv.config();

const{DB_USER, DB_PWD,DB_NAME,DB_PORT,DB_ENCRYPT,DB_TRUST_SERVER_CERTIFICATE}=process.env

const sqlConfig = {
  user: DB_USER,
  password:DB_PWD,
  database:DB_NAME,
  server: 'localhost',
  port:Number(DB_PORT),
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, 
    trustServerCertificate: true
  }
}

let appPool;
let poolRequest;
try {
    appPool=new sql.ConnectionPool(sqlConfig);
    poolRequest=()=>appPool.poolRequest();
    if(appPool){
       logger.info('connect to sql server')
    }
    
} catch (error) {
    logger.error('error creating connection pool', error)
}