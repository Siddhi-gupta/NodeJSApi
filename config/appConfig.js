let apiConfig = {};
apiConfig.port = 3000;
apiConfig.env = "dev";
apiConfig.db = {
        uri : "mongodb://127.0.0.1 27017/chatApplicationDB"
    };
apiConfig.allowedCorsOrigin  = "*";
apiConfig.apiVersion = "/api/v1";

module.exports = {
    port: apiConfig.port,
    env: apiConfig.env,
    db: apiConfig.db,
    allowedCorsOrigin: apiConfig.allowedCorsOrigin,
    version: apiConfig.apiVersion
};