// Cube.js configuration options: https://cube.dev/docs/config
/** @type{ import('@cubejs-backend/server-core').CreateOptions } */

const PostgresDriver = require("@cubejs-backend/postgres-driver");
const MongodbDriver = require("@cubejs-backend/mongobi-driver");

module.exports = {
  // contextToAppId: ({ securityContext }) =>
  //   `CUBEJS_APP_${securityContext.appId}_${securityContext.userId}`,
  // contextToOrchestratorId: ({ securityContext }) =>
  //   `CUBEJS_APP_${securityContext.appId}_${securityContext.userId}`,
  logger: (msg, params) => {
    console.log(`${msg}: ${JSON.stringify(params)}`);
  },
  // driverFactory: ({ securityContext, datasource }) => {
  //   // if (datasource === "mongobi") {
  //   //   return new MongodbDrtiver({
  //   //     host: process.env.CUBEJS_DS_MONGO_DB_HOST,
  //   //     port: process.env.CUBEJS_DS_MONGO_DB_PORT,
  //   //     database: process.env.CUBEJS_DS_MONGO_DB_NAME,
  //   //     user: process.env.CUBEJS_DS_MONGO_DB_USER,
  //   //   });
  //   // } else {
  //   //   return new PostgresDriver({
  //   //     host: process.env.CUBEJS_DB_HOST,
  //   //     database: process.env.CUBEJS_DB_NAME,
  //   //     user: process.env.CUBEJS_DB_USER,
  //   //     password: process.env.CUBEJS_DB_Pass,
  //   //   });
  //   // }
  //   return new MongodbDriver({
  //     host: process.env.CUBEJS_DS_MONGO_DB_HOST,
  //     port: process.env.CUBEJS_DS_MONGO_DB_PORT,
  //     database: process.env.CUBEJS_DS_MONGO_DB_NAME,
  //     user: process.env.CUBEJS_DS_MONGO_DB_USER,
  //   });
  // },
};
