const {PORT} = require("./ENV/env")
const app = require('./app');
const logger = require('./Utils/logger');
const connect_to_db = require('./Utils/mongo_connection');

connect_to_db();

app.listen(PORT , ()=>{
    logger.info(`Server Started at ${PORT}`);
    
})